import React, { useState, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  componentCount: number;
  largestContentfulPaint: number;
  firstContentfulPaint: number;
  cumulativeLayoutShift: number;
}

interface PerformanceIssue {
  type: 'warning' | 'error' | 'info';
  message: string;
  suggestion: string;
}

export default function PerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    componentCount: 0,
    largestContentfulPaint: 0,
    firstContentfulPaint: 0,
    cumulativeLayoutShift: 0
  });
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const renderStartTime = useRef(0);

  useEffect(() => {
    // FPS monitoring
    const measureFPS = () => {
      const now = performance.now();
      frameCount.current++;
      
      if (now - lastTime.current >= 1000) {
        setMetrics(prev => ({ ...prev, fps: frameCount.current }));
        frameCount.current = 0;
        lastTime.current = now;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Memory monitoring
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryMB = memory.usedJSHeapSize / 1048576;
        setMetrics(prev => ({ ...prev, memoryUsage: memoryMB }));
      }
    };

    // Component count monitoring
    const measureComponents = () => {
      const allElements = document.querySelectorAll('*');
      setMetrics(prev => ({ ...prev, componentCount: allElements.length }));
    };

    // Web Vitals monitoring
    const measureWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1] as any;
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lcp.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FCP
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[0] as any;
          setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // CLS
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as any[];
          let cls = 0;
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
          setMetrics(prev => ({ ...prev, cumulativeLayoutShift: cls }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Performance issues detection
    const detectIssues = () => {
      const newIssues: PerformanceIssue[] = [];

      if (metrics.fps < 30) {
        newIssues.push({
          type: 'error',
          message: `Low FPS: ${metrics.fps}`,
          suggestion: 'Check for heavy animations or unoptimized components'
        });
      } else if (metrics.fps < 50) {
        newIssues.push({
          type: 'warning',
          message: `FPS could be better: ${metrics.fps}`,
          suggestion: 'Consider optimizing animations or reducing render complexity'
        });
      }

      if (metrics.memoryUsage > 100) {
        newIssues.push({
          type: 'error',
          message: `High memory usage: ${metrics.memoryUsage.toFixed(1)}MB`,
          suggestion: 'Check for memory leaks or large objects in state'
        });
      } else if (metrics.memoryUsage > 50) {
        newIssues.push({
          type: 'warning',
          message: `Memory usage: ${metrics.memoryUsage.toFixed(1)}MB`,
          suggestion: 'Monitor for gradual memory increases'
        });
      }

      if (metrics.largestContentfulPaint > 2500) {
        newIssues.push({
          type: 'warning',
          message: `Slow LCP: ${(metrics.largestContentfulPaint / 1000).toFixed(2)}s`,
          suggestion: 'Optimize largest content element loading'
        });
      }

      if (metrics.cumulativeLayoutShift > 0.1) {
        newIssues.push({
          type: 'warning',
          message: `Layout shifts detected: ${metrics.cumulativeLayoutShift.toFixed(3)}`,
          suggestion: 'Reserve space for dynamic content'
        });
      }

      if (metrics.componentCount > 1000) {
        newIssues.push({
          type: 'info',
          message: `Large DOM: ${metrics.componentCount} elements`,
          suggestion: 'Consider virtualizing large lists'
        });
      }

      if (newIssues.length === 0) {
        newIssues.push({
          type: 'info',
          message: 'Performance looks good!',
          suggestion: 'All metrics are within acceptable ranges'
        });
      }

      setIssues(newIssues);
    };

    measureFPS();
    const memoryInterval = setInterval(measureMemory, 1000);
    const componentInterval = setInterval(measureComponents, 2000);
    const issuesInterval = setInterval(detectIssues, 3000);
    
    measureWebVitals();

    return () => {
      clearInterval(memoryInterval);
      clearInterval(componentInterval);
      clearInterval(issuesInterval);
    };
  }, [metrics.fps, metrics.memoryUsage, metrics.largestContentfulPaint, metrics.cumulativeLayoutShift, metrics.componentCount]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors z-50"
      >
        ⚡ Performance
      </button>
    );
  }

  return (
    <div className="fixed top-4 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-[600px] overflow-y-auto">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">Performance Monitor</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {/* Real-time Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-xs text-gray-600">FPS</div>
            <div className={`text-lg font-semibold ${metrics.fps >= 50 ? 'text-green-600' : metrics.fps >= 30 ? 'text-yellow-600' : 'text-red-600'}`}>
              {metrics.fps}
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="text-xs text-gray-600">Memory (MB)</div>
            <div className={`text-lg font-semibold ${metrics.memoryUsage < 50 ? 'text-green-600' : metrics.memoryUsage < 100 ? 'text-yellow-600' : 'text-red-600'}`}>
              {metrics.memoryUsage.toFixed(1)}
            </div>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-xs text-gray-600">DOM Elements</div>
            <div className="text-lg font-semibold text-gray-800">
              {metrics.componentCount}
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-xs text-gray-600">LCP (s)</div>
            <div className={`text-lg font-semibold ${metrics.largestContentfulPaint < 2500 ? 'text-green-600' : 'text-yellow-600'}`}>
              {(metrics.largestContentfulPaint / 1000).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Web Vitals */}
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-800 mb-2">Web Vitals</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>First Contentful Paint:</span>
              <span className={metrics.firstContentfulPaint < 1800 ? 'text-green-600' : 'text-yellow-600'}>
                {(metrics.firstContentfulPaint / 1000).toFixed(2)}s
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Cumulative Layout Shift:</span>
              <span className={metrics.cumulativeLayoutShift < 0.1 ? 'text-green-600' : 'text-yellow-600'}>
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        {/* Performance Issues */}
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-800 mb-2">Performance Analysis</h4>
          <div className="space-y-2">
            {issues.map((issue, index) => (
              <div
                key={index}
                className={`p-2 rounded text-xs ${
                  issue.type === 'error'
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : issue.type === 'warning'
                    ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                <div className="font-medium">{issue.message}</div>
                <div className="mt-1 opacity-80">{issue.suggestion}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Status */}
        <div className="border-t pt-4">
          <h4 className="font-medium text-gray-800 mb-2">Applied Optimizations</h4>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Component splitting (HomePage → 6 sections)
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              React Slick → LightCarousel (-45KB)
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Lazy loading with Suspense
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Removed unused pages (-15KB)
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              CSS performance optimizations
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Font loading optimization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}