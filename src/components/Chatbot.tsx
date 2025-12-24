import React from 'react';

export function Chatbot() {
    const [shouldLoad, setShouldLoad] = React.useState(false);
    const [iframeLoaded, setIframeLoaded] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                // Once it becomes visible, load it and disconnect observer
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px', // Load slightly before it comes into view
                threshold: 0.1
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="chatbot" className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">DX 추진단 AI 챗봇</h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
                        DX 추진단에 대한 질문이 있으시면 AI 챗봇과 대화해보세요. 챗봇의 답변은 시간에 따라 변경될 수 있습니다.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="max-w-4xl mx-auto relative"
                    style={{ minHeight: '700px' }} // Reserve space to prevent layout shift
                >
                    {/* Loading Overlay - Visible until iframe is fully loaded */}
                    {(!shouldLoad || !iframeLoaded) && (
                        <div className="absolute inset-0 w-full h-full bg-gray-100 flex flex-col items-center justify-center rounded-lg z-10">
                            <div className="w-10 h-10 border-4 border-gray-300 border-t-[#8B1538] rounded-full animate-spin mb-4"></div>
                            <span className="text-gray-600 font-medium">DX 추진단 AI 챗봇을 연결중입니다...</span>
                        </div>
                    )}

                    {shouldLoad && (
                        <iframe
                            src="https://udify.app/chatbot/ZGMVkXbe1dJreBSX"
                            style={{
                                width: '100%',
                                height: '100%',
                                minHeight: '700px',
                                opacity: iframeLoaded ? 1 : 0, // Fade in once loaded
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                            frameBorder="0"
                            allow="microphone"
                            title="AI Chatbot"
                            onLoad={() => setIframeLoaded(true)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
