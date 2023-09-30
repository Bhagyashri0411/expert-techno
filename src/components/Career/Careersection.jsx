import { Technologies } from "./Technologies"
import "./career.css"
export const Careersection = () => {
    return (
        <>
            <section className="relative border-y border-gray-100 pt-16 lg:pt-32">
                <svg className="absolute inset-0 z-0 h-full w-full stroke-gray-100 [mask-image:radial-gradient(transparent,white)]">
                    <rect width="100%" height="100%" fill="url(#grid-2)" />
                    <defs>
                        <pattern id="grid-2" width={145} height={145} x="50%" y={-1} patternUnits="userSpaceOnUse">
                            <path fill="none" d="M.5 200V.5H200" />
                        </pattern>
                    </defs>
                </svg>
                <svg className="absolute inset-0 z-10 h-full w-full stroke-gray-200 [mask-image:linear-gradient(90deg,white,transparent_18%,transparent_82%,white)]">
                    <rect width="100%" height="100%" fill="url(#grid-1)" />
                    <defs>
                        <pattern id="grid-1" width={145} height={145} x="50%" y={-1} patternUnits="userSpaceOnUse">
                            <path fill="none" d="M.5 200V.5H200" />
                        </pattern>
                    </defs>
                </svg>
                <div className="relative z-20 mx-auto max-w-screen-2xl px-6">
                    <div className="flex flex-col items-stretch text-center">
                        <h4 className="mb-12 px-4 text-sm font-bold uppercase leading-relaxed tracking-widest text-gray-500 sm:text-base">Explore New  way with us</h4>
                        <span className="h-24 w-px self-center bg-gradient-to-t from-primary-600 to-white" />
                        <span className="mb-6 flex h-10 w-10 items-center justify-center self-center rounded-full bg-gradient-to-r from-primary-600 to-purple-500 text-xl font-bold text-white">1</span>
                        <span className="mb-4 bg-gradient-to-br from-primary-600 to-purple-600 bg-clip-text text-[28px] font-bold uppercase leading-9 tracking-tight text-transparent">Learn </span>
                        <h3 className="bg-gradient-to-b from-black via-gray-700 to-black bg-clip-text pb-6 text-[40px] font-bold leading-[2.75rem] tracking-tighter text-transparent sm:text-6xl">
                            Unlocking the Power of Instant
                            <br /> and Interactive Python
                        </h3>
                        <span className="mx-auto mb-16 w-full max-w-3xl text-xl leading-8 tracking-tight text-gray-600 sm:mb-24">
                            Welcome to a world of Python programming where speed and interactivity are at your fingertips. Whether you're a seasoned developer looking to streamline your workflow or a beginner eager to learn Python, our platform empowers you to write, test, and experiment with Python code instantly and interactively.
                        </span>
                        <div className="mx-auto w-full">

                            <div className="flex w-full translate-y-px flex-col lg:flex-row">
                                <div className="order-3 w-full flex-auto py-12 lg:order-1">
                                    <div className="flex w-full flex-1 text-left lg:px-14">
                                        <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl p-[5%]">
                                            <div className="flex h-full w-full overflow-hidden rounded-md bg-white shadow-2xl">
                                                <div className="flex flex-[60%] flex-col">
                                                    <div className="flex border-b bg-white text-[min(1.6vw,10px)] lg:text-[min(0.8vw,11px)]">
                                                        <div className="flex w-[20%] items-center justify-center gap-[15%] px-[4%] py-[2%]">
                                                            <div className="aspect-1 w-2.5 rounded-full bg-destructive-400" />
                                                            <div className="aspect-1 w-2.5 rounded-full bg-warning-400" />
                                                            <div className="aspect-1 w-2.5 rounded-full bg-success-400" />
                                                        </div>
                                                        <div className="w-fit translate-y-px border-x bg-white px-[4%] py-[2%] text-gray-600">main.py</div>
                                                    </div>
                                                    <div className="flex gap-[2.5%] font-mono text-[min(2vw,14px)] tracking-tight lg:text-[min(1vw,14px)]">
                                                        <div className="flex flex-col">
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">01</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">02</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">03</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">04</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">05</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">06</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">07</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">08</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">09</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">10</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">11</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">12</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">13</span>
                                                        </div>
                                                        <code className="flex flex-col text-gray-600" style={{ textAlign: 'left', whiteSpace: 'pre', wordSpacing: 'normal', wordBreak: 'normal', tabSize: 4, hyphens: 'none', overflowWrap: 'normal' }}>
                                                            <span className="text-gray-400"># Concatenate the parameters</span>
                                                            <span>
                                                                <span className="font-semibold">def</span>
                                                                <span className="font-semibold text-purple-700">&nbsp;concat</span>
                                                                <span>(p1,p2)</span>
                                                                <span>:</span>
                                                            </span>
                                                            <span>&nbsp;&nbsp;<span>
                                                                <span className="font-semibold">return&nbsp;</span>
                                                                <span className="font-semibold text-purple-700">str</span>
                                                                <span>(p1)</span>
                                                                <span>&nbsp;+&nbsp;</span>
                                                                <span className="font-semibold text-purple-700">str</span>
                                                                <span>(p2)</span>
                                                            </span>
                                                            </span>
                                                            <br />
                                                            <span>
                                                                <span className="font-semibold">param_1</span>
                                                                <span>&nbsp;=&nbsp;</span>
                                                                <span className="font-semibold text-purple-700">13</span>
                                                            </span>
                                                            <span>
                                                                <span className="font-semibold">param_2</span>
                                                                <span>&nbsp;=&nbsp;</span>
                                                                <span className="font-semibold text-purple-700">37</span>
                                                            </span>
                                                            <span>
                                                                <span className="font-semibold text-purple-700">print</span>
                                                                <span>(</span>
                                                                <span className="font-semibold text-purple-700">concat</span>
                                                                <span>(param_1,param_2))</span>
                                                            </span>
                                                        </code>
                                                    </div>
                                                </div>
                                                <div className="flex flex-[40%] flex-col border-l border-gray-200 text-[min(1.75vw,12px)] lg:text-[min(0.85vw,12px)]">
                                                    <div className="flex h-[10%] border-b border-gray-200 bg-white text-gray-500">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0.5" viewBox="0 0 16 16" className="ml-[5%] aspect-1 h-auto w-[7%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                        </svg>
                                                    </div>
                                                    <div className="relative flex flex-1 animate-fade-in items-end justify-center gap-[4%] bg-gray-50 opacity-0">
                                                        <span className="absolute inset-0 flex items-center justify-center">
                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="aspect-1 h-auto w-[20%] -translate-y-1/3 text-success-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                                            </svg>
                                                        </span>
                                                        <div className="flex h-1/4 w-full flex-col bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-[4%] font-mono text-white">
                                                            <span>
                                                                <b>$shell:</b> Output → 1337</span>
                                                            <span>
                                                                <b>$shell:</b> Success! 🎉</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="order-2 flex flex-col items-center lg:order-2">
                                    <span className="h-24 w-px self-center bg-gradient-to-t from-gray-500 to-white lg:h-auto lg:flex-[1_1_25%] lg:border-r lg:border-dashed lg:border-gray-500 lg:bg-transparent" />
                                    <span className="my-1 h-3 w-3 rounded-full border border-gray-500" />
                                    <span className="hidden w-px flex-[1_1_75%] self-center bg-gradient-to-b from-gray-500 to-secondary-400 lg:block" />
                                </div>
                                <div className="order-1 mt-4 flex w-full flex-auto lg:order-3 lg:-mt-4 lg:translate-y-1/4">
                                    <div className="mx-auto w-full max-w-xl lg:mx-0 lg:pl-14 lg:pr-8 lg:text-left">
                                        <dt className="flex flex-col items-center gap-4 lg:items-start">
                                            <svg stroke="currentColor" fill="url(#LearnSvgGradient)" strokeWidth={0} viewBox="0 0 16 16" className="h-8 w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                            </svg>
                                            <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-[26px]">
                                                Live Code Execution
                                            </h3>
                                        </dt>
                                        <dd className="leading-relaxed text-gray-600">
                                            Write Python code and see the results in real-time. No more waiting for long compilation or execution times
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full translate-y-px flex-col lg:flex-row">
                                <div className="order-3 w-full flex-auto py-12 lg:order-1">
                                    <div className="mx-auto w-full max-w-xl lg:mx-0 lg:pl-14 lg:pr-8 lg:text-left">
                                        <dt className="flex flex-col items-center gap-4 lg:items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600 [&_rect]:fill-[currentColor]" fill="none" viewBox="0 0 186 186">
                                                <path fill="url(#LearnSvgGradient)" d="M17.438 0A17.437 17.437 0 000 17.438v81.374a17.438 17.438 0 0017.438 17.438H69.75v11.625H11.625A11.626 11.626 0 000 139.5v34.875A11.625 11.625 0 0011.625 186h162.75A11.625 11.625 0 00186 174.375V139.5a11.625 11.625 0 00-11.625-11.625H116.25V116.25h52.312A17.439 17.439 0 00186 98.812V17.439A17.438 17.438 0 00168.562 0H17.437zm0 11.625h151.124a5.814 5.814 0 015.813 5.813v81.374a5.813 5.813 0 01-5.813 5.813H17.437a5.812 5.812 0 01-5.812-5.813V17.439a5.813 5.813 0 015.813-5.813zM139.5 145.312a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zm23.25 0a5.813 5.813 0 1111.626 0 5.813 5.813 0 01-11.626 0zM17.437 139.5h58.126a5.812 5.812 0 110 11.625H17.437a5.812 5.812 0 110-11.625zm-5.812 26.156a2.906 2.906 0 012.906-2.906H78.47a2.906 2.906 0 110 5.812H14.53a2.906 2.906 0 01-2.906-2.906z" />
                                                <rect width={114} height={9} x={27} y={37} rx="4.5" />
                                                <rect width={69} height={9} x={27} y={54} rx="4.5" />
                                                <rect width={114} height={9} x={27} y={71} rx="4.5" />
                                            </svg>
                                            <h3 className="mb-2 to-secondary-400 text-2xl font-semibold tracking-tight sm:text-[26px]">Hands-on practice</h3>
                                        </dt>
                                        <dd className="leading-relaxed text-gray-600">
                                            Hands-on practice is the bridge between knowledge and mastery. It transforms you from a passive learner into an active creator. So, whether you're striving for personal growth or professional development, roll up your sleeves, dive in, and experience the transformative power of hands-on practice. It's the journey that leads to expertise and accomplishment.
                                        </dd>
                                    </div>
                                </div>
                                <div className="order-2 flex flex-col items-center lg:order-2">
                                    <span className="h-24 w-px self-center bg-gradient-to-t from-gray-500 to-white lg:h-auto lg:flex-[1_1_25%] lg:border-r lg:border-dashed lg:border-gray-500 lg:bg-transparent" />
                                    <span className="my-1 h-3 w-3 rounded-full border border-gray-500" />
                                    <span className="hidden w-px flex-[1_1_75%] self-center bg-gradient-to-b from-gray-500 to-secondary-400 lg:block" />
                                </div>
                                <div className="order-1 mt-4 flex w-full flex-auto lg:order-3 lg:-mt-4 lg:translate-y-1/4">
                                    <div className="flex w-full select-none lg:px-14">
                                        <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl p-[5%]">
                                            <div className="flex h-full w-full overflow-hidden rounded-md bg-white shadow-2xl">
                                                <div className="flex flex-[60%] flex-col">
                                                    <div className="flex border-b bg-white text-[min(1.6vw,10px)] lg:text-[min(0.8vw,11px)]">
                                                        <div className="flex w-[20%] items-center justify-center gap-[15%] px-[4%] py-[2%]">
                                                            <div className="aspect-1 w-2.5 rounded-full bg-red-400" />
                                                            <div className="aspect-1 w-2.5 rounded-full bg-yellow-400" />
                                                            <div className="aspect-1 w-2.5 rounded-full bg-green-400" />
                                                        </div>
                                                        <div className="w-fit translate-y-px border-x bg-white px-[4%] py-[2%] text-gray-600">index.jsx</div>
                                                    </div>
                                                    <div className="flex gap-[2.5%] font-mono text-[min(2vw,14px)] tracking-tight lg:text-[min(1vw,14px)]">
                                                        <div className="flex flex-col">
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">05</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">06</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">07</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">08</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">09</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">10</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">11</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">12</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">13</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">14</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">15</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">16</span>
                                                            <span className="h-full bg-gray-50 px-1.5 text-gray-400">17</span>
                                                        </div>
                                                        <code className="flex flex-col text-gray-600" style={{ textAlign: 'left', whiteSpace: 'pre', wordSpacing: 'normal', wordBreak: 'normal', tabSize: 4, hyphens: 'none', overflowWrap: 'normal' }}>
                                                            <span className="text-gray-500">....</span>
                                                            <span className="inline">
                                                                <span className="font-semibold">export function </span>
                                                                <span>({'{'} data {'}'}) =&gt; {'{'}</span>
                                                            </span>
                                                            <span>
                                                                <span>&nbsp;&nbsp;</span>
                                                                <span className="font-semibold">return&nbsp;</span>
                                                                <span>&lt;</span>
                                                                <span className="font-semibold text-purple-700">Layout</span>
                                                                <span>&gt;</span>
                                                            </span>
                                                            <span className="inline-flex">&nbsp;&nbsp;&nbsp;&nbsp;<span>
                                                                <span>&lt;</span>
                                                                <span className="font-semibold text-purple-700">Game </span>
                                                                <span>details={'{'}data{'}'}&nbsp;/&gt;</span>
                                                            </span>
                                                            </span>
                                                            <span>
                                                                <span>&nbsp;&nbsp;</span>
                                                                <span>&lt;/</span>
                                                                <span className="font-semibold text-purple-700">Layout</span>
                                                                <span>&gt;</span>
                                                            </span>
                                                            <span>{'}'}</span>
                                                            <span className="text-gray-500">....</span>
                                                        </code>
                                                    </div>
                                                </div>
                                                <div className="flex flex-[40%] flex-col border-l border-gray-200 text-[min(2vw,14px)] lg:text-[min(1vw,14px)]">
                                                    <div className="flex h-[10%] border-b border-gray-200 bg-white text-gray-500">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0.5" viewBox="0 0 16 16" className="ml-[5%] aspect-1 h-auto w-[7%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                        </svg>
                                                    </div>
                                                    <div className="relative flex flex-1 animate-fade-in items-end justify-center bg-gray-50 opacity-0 [&_span]:ring-gray-100">
                                                        <span className="absolute inset-0 flex items-center justify-center">
                                                            <span className="font-mono text-lg font-bold tracking-wide">Learn + Practice</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-0 left-0 flex max-w-[35%] flex-col rounded bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 px-[2.5%] py-[1.5%] text-[min(2vw,14px)] font-medium text-gray-100 shadow-2xl lg:text-[min(1vw,14px)]">
                                                <span className="mb-[5%]">
                                                    <span className="text-[min(2.25vw,16px)] font-bold text-white lg:text-[min(1.125vw,16px)]">6</span>/6 challenges completed</span>
                                                <ul className="mb-[3%] grid grid-cols-6 gap-[5%]" style={{ opacity: 1 }}>
                                                    <li className="w-full" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full rounded-full text-success-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                        </svg>
                                                    </li>
                                                    <li className="w-full" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full rounded-full text-success-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                        </svg>
                                                    </li>
                                                    <li className="w-full" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full rounded-full text-success-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                        </svg>
                                                    </li>
                                                    <li className="w-full" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full rounded-full text-success-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                        </svg>
                                                    </li>
                                                    <li className="w-full" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full rounded-full text-success-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                        </svg>
                                                    </li>
                                                    <li className="w-full" style={{ opacity: 1, transform: 'none' }}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full rounded-full text-success-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <span className="h-24 w-px self-center bg-gradient-to-t  from-secondary-400 to-cyan-50 lg:from-secondary-400 lg:to-cyan-400" />
                        <span className="mb-6 flex h-10 w-10 items-center justify-center self-center rounded-full bg-gradient-to-r from-secondary-500 to-cyan-400 text-xl font-bold text-white">2</span>
                        <span className="mb-4 bg-gradient-to-br from-secondary-600 to-cyan-400 bg-clip-text text-[28px] font-bold uppercase leading-9 tracking-tight text-transparent">Apply</span>
                        <h3 className="bg-gradient-to-b from-black via-gray-700 to-black bg-clip-text pb-6 text-[40px] font-bold leading-[2.75rem] tracking-tighter text-transparent sm:text-6xl">Powerful IDE with AI Tooling</h3>
                        <span className="mx-auto mb-16 w-full max-w-3xl text-xl leading-8 tracking-tight text-gray-600 sm:mb-24">Become a better programmer by building tons of real-world projects and keep improving with detailed feedback on your code - generated by state-of-the-art AI.</span>
                        <div className="mx-auto mb-24 grid w-full lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <div className="flex h-full -translate-x-[1%] justify-center text-left lg:items-center lg:pl-14 lg:pr-[62px]">
                                    <div className="relative mx-auto flex w-full max-w-xl flex-col" style={{ transform: 'none' }}>
                                        <div className="relative flex aspect-2 w-full max-w-[90%] flex-1 overflow-hidden rounded-sm border border-gray-400/20 shadow-xl">
                                            <div className="flex h-full w-full flex-[6%] items-center justify-center rounded-l-sm bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 text-white">
                                                <div className="flex h-[90%] w-[50%] flex-col gap-[6%]">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z" />
                                                    </svg>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                                    </svg>
                                                    <div className="flex-1" />
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-auto w-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex flex-[94%] overflow-hidden">
                                                <div className="flex flex-[60%] flex-col">
                                                    <div className="flex border-b border-gray-100 bg-white text-[min(1.6vw,10px)] lg:text-[min(0.6vw,10px)]">
                                                        <div className="w-fit border border-transparent border-t-black px-[2%] py-[0.5%]">app.js</div>
                                                        <div className="w-fit border border-transparent border-x-gray-200 bg-gray-100 px-[2%] py-[0.5%]">style.css</div>
                                                    </div>
                                                    <div className="flex gap-1 bg-white py-[1%] font-mono text-[min(2vw,13px)] lg:text-[min(1vw,13px)]">
                                                        <div className="flex flex-col">
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">01</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">02</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">03</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">04</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">05</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">06</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">07</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">08</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">09</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">10</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">11</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">12</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">13</span>
                                                            <span className="h-full bg-gray-50 px-[5px] text-gray-500">14</span>
                                                        </div>
                                                        <code className="flex flex-col font-mono text-gray-600" style={{ textAlign: 'left', whiteSpace: 'pre', wordSpacing: 'normal', wordBreak: 'normal', tabSize: 4, hyphens: 'none', overflowWrap: 'normal' }}>
                                                            <span>
                                                                <span className="text-gray-400">// app file clone project</span>
                                                            </span>
                                                            <span className="text-gray-500">....</span>
                                                            <span>
                                                                <span>&lt;</span>
                                                                <span className="font-semibold text-secondary-500">Layout</span>
                                                                <span>&gt;</span>
                                                            </span>
                                                            <span>
                                                                <span>&nbsp;&lt;</span>
                                                                <span className="font-semibold text-secondary-500">div </span>
                                                                <span>className="</span>
                                                                <span className="font-semibold">container</span>
                                                                <span>&gt;</span>
                                                            </span>
                                                            <span className="inline-flex">&nbsp;&nbsp;<span>
                                                                <span>&lt;</span>
                                                                <span className="font-semibold text-secondary-500">Hero&nbsp;</span>
                                                                <span>feature="</span>
                                                                <span className="font-semibold">model-3</span>
                                                                <span>"/&gt;</span>
                                                            </span>
                                                            </span>
                                                            <span>
                                                                <span>&nbsp;&lt;/</span>
                                                                <span className="font-semibold text-secondary-500">div</span>
                                                                <span>&gt;</span>
                                                            </span>
                                                            <span>
                                                                <span>&lt;/</span>
                                                                <span className="font-semibold text-secondary-500">Layout</span>
                                                                <span>&gt;</span>
                                                            </span>
                                                            <span className="text-gray-500">....</span>
                                                        </code>
                                                    </div>
                                                </div>
                                                <div className="flex flex-[40%] flex-col border-l border-gray-100">
                                                    <div className="flex items-center justify-between border-b border-gray-100 bg-white">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="aspect-1 h-auto w-[10.5%] p-[2%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                        </svg>
                                                        <span className="h-[50%] w-[75%] rounded-sm bg-gray-200" />
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="aspect-1 h-auto w-[10%] p-[2%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                                            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                                        </svg>
                                                    </div>
                                                    <div className="relative flex flex-1 animate-fade-in bg-gray-100 opacity-0">
                                                        <img alt="Tesla landing page clone featuring the model-3" loading="lazy"
                                                            width={194} height={268} decoding="async"
                                                            data-nimg={1} className="w-auto object-cover"
                                                            src="https://wsrv.nl/?url=https%3A%2F%2Fcodedamn.com%2Fassets%2Flanding-page-assets%2Ftesla.png&w=388&q=70&output=webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative left-[10%] -mt-[10%] mb-[10%] flex aspect-2 w-full max-w-[90%] flex-1 overflow-hidden rounded-sm border border-gray-400/30 bg-white shadow-xl p-[3%]">
                                            <div className="grid h-full w-full grid-cols-7 grid-rows-5 gap-x-[2.5%] gap-y-[5%] font-mono text-[min(2vw,12px)]" style={{ opacity: 1 }}>
                                                <div className="bg-gradie col-span-3 row-span-3 bg-gradient-to-br from-gray-50 to-white p-[8%]" style={{ opacity: 1 }}>
                                                    <div className="flex h-full w-full flex-col gap-[6.5%] [&_span]:h-full [&_span]:rounded-full [&_span]:bg-gray-300">
                                                        <div className="font-semibold uppercase tracking-wider">Suggestions</div>
                                                        <span className="w-full" />
                                                        <span className="w-full" />
                                                        <span className="w-full" />
                                                        <span className="w-full" />
                                                        <span className="w-full" />
                                                        <span className="w-full" />
                                                        <span className="w-[78%]" />
                                                    </div>
                                                </div>
                                                <div className="col-span-4 row-span-4 bg-gradient-to-bl from-gray-50 to-white p-[5.5%]" style={{ opacity: 1 }}>
                                                    <div className="flex h-full flex-col items-stretch justify-between">
                                                        <div className="font-semibold uppercase tracking-wider">Code Analysis</div>
                                                        <div className="my-[5%] flex items-center text-[min(2.5vw,20px)] lg:text-[min(1.2vw,20px)]">
                                                            <div className="flex items-center gap-[4%]">
                                                                <span className="font-bold text-yellow-500">4.5</span>
                                                                <div className="-mt-[1%] flex w-[40%] items-center">
                                                                    <div className="flex max-w-none items-center justify-center">
                                                                        <svg width="100%" height="100%" viewBox="0 0 70 14" xmlns="http://www.w3.org/2000/svg">
                                                                            <defs>
                                                                                <symbol id="icon-rating-star-:r0:" viewBox="0 0 24 24">
                                                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                                                                </symbol>
                                                                            </defs>
                                                                            <mask id="star-rating-mask-:r0:" data-purpose="star-rating-mask">
                                                                                <rect x={0} y={0} width="90%" height="100%" fill="white" />
                                                                            </mask>
                                                                            <g fill="rgb(250 204 21)" mask="url(#star-rating-mask-:r0:)" data-purpose="star-filled">
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={14} height={14} x={0} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={14} height={14} x={14} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={14} height={14} x={28} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={14} height={14} x={42} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={14} height={14} x={56} />
                                                                            </g>
                                                                            <g fill="transparent" stroke="rgb(250 204 21)" strokeWidth={2} data-purpose="star-bordered">
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={12} height={12} x={1} y={1} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={12} height={12} x={15} y={1} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={12} height={12} x={29} y={1} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={12} height={12} x={43} y={1} />
                                                                                <use xlinkHref="#icon-rating-star-:r0:" width={12} height={12} x={57} y={1} />
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <dl className="flex flex-1 flex-col justify-between text-[min(2vw,11px)] lg:text-[min(0.8vw,11px)]">
                                                            <div className="flex items-center gap-[5%]">
                                                                <span className="min-w-[30%]">Performance</span>
                                                                <div className="relative h-[35%] flex-1">
                                                                    <div className="h-full w-full rounded-full border border-gray-200 bg-gray-100" />
                                                                    <div className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400" style={{ width: '87%' }} />
                                                                </div>
                                                                <span className="text-right tabular-nums text-gray-900">87%</span>
                                                            </div>
                                                            <div className="flex items-center gap-[5%]">
                                                                <span className="min-w-[30%]">Security</span>
                                                                <div className="relative h-[35%] flex-1">
                                                                    <div className="h-full w-full rounded-full border border-gray-200 bg-gray-100" />
                                                                    <div className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400" style={{ width: '78%' }} />
                                                                </div>
                                                                <span className="text-right tabular-nums text-gray-900">78%</span>
                                                            </div>
                                                            <div className="flex items-center gap-[5%]">
                                                                <span className="min-w-[30%]">Readability</span>
                                                                <div className="relative h-[35%] flex-1">
                                                                    <div className="h-full w-full rounded-full border border-gray-200 bg-gray-100" />
                                                                    <div className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400" style={{ width: '92%' }} />
                                                                </div>
                                                                <span className="text-right tabular-nums text-gray-900">92%</span>
                                                            </div>
                                                            <div className="flex items-center gap-[5%]">
                                                                <span className="min-w-[30%]">Accuracy</span>
                                                                <div className="relative h-[35%] flex-1">
                                                                    <div className="h-full w-full rounded-full border border-gray-200 bg-gray-100" />
                                                                    <div className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400" style={{ width: '89%' }} />
                                                                </div>
                                                                <span className="text-right tabular-nums text-gray-900">89%</span>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="col-span-3 row-span-2 bg-gradient-to-tr from-gray-50 to-white p-[8%]" style={{ opacity: 1 }}>
                                                    <div className="flex h-full w-full flex-col gap-[13%] [&_span]:h-full [&_span]:rounded-full [&_span]:bg-gray-300">
                                                        <div className="font-semibold uppercase tracking-wider">Summary</div>
                                                        <span className="w-full" />
                                                        <span className="w-full" />
                                                        <span className="w-[78%]" />
                                                    </div>
                                                </div>
                                                <div className="col-span-4 row-span-1 flex items-center justify-center rounded bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-[1%] text-[min(1.5vw,12px)] text-white lg:text-[min(0.7vw,12px)]" style={{ opacity: 1 }}>Generated by codedamn AI in 10 mins</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16 px-1.5">
                                <div className="mx-auto w-full max-w-xl lg:mx-0 lg:pl-14 lg:pr-8 lg:text-left">
                                    <dt className="flex flex-col items-center gap-4 lg:items-start">
                                        <svg stroke="currentColor" fill="url(#ApplySvgGradient)" strokeWidth={0} viewBox="0 0 16 16" className="h-8 w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                                            <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z" />
                                        </svg>
                                        <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-[26px]">Practice 100+ Projects</h3>
                                    </dt>
                                    <dd className="leading-relaxed text-gray-600">Improve you skills by building. Choose from over 100+ projects to practice, build for your resume and showcase to the world.</dd>
                                </div>
                                <div className="mx-auto w-full max-w-xl lg:mx-0 lg:pl-14 lg:pr-8 lg:text-left">
                                    <dt className="flex flex-col items-center gap-4 lg:items-start">
                                        <svg stroke="currentColor" fill="url(#ApplySvgGradient)" strokeWidth={0} viewBox="0 0 16 16" className="h-8 w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                        <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-[26px]">Unlimited building and feedback</h3>
                                    </dt>
                                    <dd className="leading-relaxed text-gray-600">For every great project you build, we help you make it better with CodeReport™. Get detailed feedback on your projects.</dd>
                                </div>
                                <div className="mx-auto w-full max-w-xl lg:mx-0 lg:pl-14 lg:pr-8 lg:text-left">
                                    <dt className="flex flex-col items-center gap-4 lg:items-start">
                                        <svg stroke="currentColor" fill="url(#ApplySvgGradient)" strokeWidth={0} viewBox="0 0 16 16" className="h-8 w-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V4a1 1 0 0 0-1-1H2Z" />
                                            <path d="M3.146 5.146a.5.5 0 0 1 .708 0L5.177 6.47a.75.75 0 0 1 0 1.06L3.854 8.854a.5.5 0 1 1-.708-.708L4.293 7 3.146 5.854a.5.5 0 0 1 0-.708ZM5.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0Z" />
                                        </svg>
                                        <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-[26px]">Brush away all the bugs</h3>
                                    </dt>
                                    <dd className="leading-relaxed text-gray-600">Use code brushes in playgrounds to fix, debug, refactor or even write full code blocks - at a click of a button</dd>
                                </div>
                            </div>
                        </div>

                        <div className="mb-24 flex flex-col">
                            <h4 className="mb-12 px-4 text-sm font-bold uppercase leading-relaxed tracking-widest text-gray-500 sm:text-base">We provide 50+ Powerful In-browser IDE Templates </h4>
                            <div className="mx-auto grid max-w-xl grid-cols-4 place-items-center gap-8 sm:grid-cols-8 [&_svg]:h-12 [&_svg]:w-12">
                                <div className="has-tooltip">
                                    <svg fill="none" className="transition-transform hover:scale-110" viewBox="-10.5 -9.4 21 18.9">
                                        <circle r={2} fill="#00D8FF" />
                                        <g stroke="#00D8FF">
                                            <ellipse rx={10} ry="4.5" />
                                            <ellipse rx={10} ry="4.5" transform="rotate(60)" />
                                            <ellipse rx={10} ry="4.5" transform="rotate(120)" />
                                        </g>
                                    </svg>

                                </div>
                                <div className="has-tooltip">
                                        <svg fill="none" viewBox="0 0 400 400" className="transition-transform hover:scale-110">
                                            <path fill="#E44D26" d="M56 360 24 0h353l-32 360-145 40" />
                                            <path fill="#F16529" d="M200 369V30h145l-28 307" />
                                            <path fill="#EBEBEB" d="M90 74h110v44h-62l4 45h58v44h-98L90 74Zm14 155h44l3 35 49 14v46l-90-26" />
                                            <path fill="#fff" d="M311 74H200v44h107l4-44Zm-8 89H200v44h55l-6 57-49 14v46l91-26" />
                                        </svg>
                                   
                                </div>
                                <div className="has-tooltip">
                                        <svg className="transition-transform hover:scale-110" fill="none" viewBox="0 0 400 400">
                                            <path fill="#5382A1" d="M147 309s-15 9 11 12c32 4 48 3 83-3l22 10c-79 34-177-1-116-19Zm-10-43s-17 12 9 15c34 3 61 4 107-5 0 0 7 6 17 10-95 28-200 2-133-20Z" />
                                            <path fill="#E76F00" d="M218 191c19 22-5 42-5 42s49-25 27-56c-21-30-38-45 50-95 0 0-137 34-72 109Z" />
                                            <path fill="#5382A1" d="M322 342s11 9-13 16c-45 14-188 18-228 1-14-6 13-15 21-17 9-2 14-1 14-1-16-12-102 22-44 31 160 26 291-12 250-30ZM154 220s-72 17-25 24c19 2 59 2 96-1l60-8s-11 4-18 10c-74 19-217 10-176-10 35-17 63-15 63-15Zm131 73c75-39 40-76 16-71l-9 2 7-5c48-17 84 50-16 76l2-2Z" />
                                            <path fill="#E76F00" d="M240 0s41 42-40 106c-65 51-15 80 0 113-38-34-66-64-47-92 27-41 103-61 87-127Z" />
                                            <path fill="#5382A1" d="M162 399c72 4 182-3 185-37 0 0-5 13-60 23-61 12-137 11-182 3 0 0 9 8 57 11Z" />
                                        </svg>
                                   
                                </div>
                                <div className="has-tooltip">
                                        <svg fill="none" viewBox="0 0 400 400" className="transition-transform hover:scale-110">
                                            <path fill="#539E43" d="M200 400c-5 0-10-1-15-4l-49-29c-7-4-3-6-1-6l22-10h3l38 23h4l147-85 2-4V115l-2-4-147-84h-4L51 111l-2 4v170l2 4 40 23c22 11 36-2 36-15V130c0-2 1-5 4-5h19c2 0 4 2 4 5v167c0 29-16 46-43 46-9 0-15 0-34-9l-39-22c-9-6-15-16-15-27V116c0-11 6-22 15-27L185 4c9-5 22-5 31 0l147 85c9 5 15 16 15 27v169c0 11-6 21-15 27l-147 85c-5 2-10 3-16 3Zm46-116c-65 0-78-30-78-55 0-2 2-4 5-4h19c2 0 4 1 4 3 3 20 11 29 50 29 31 0 44-7 44-23 0-10-4-17-52-21-40-4-65-13-65-45 0-30 25-48 67-48 47 0 70 17 73 52l-1 3-3 2h-19c-2 0-4-2-4-4-4-20-16-27-46-27-34 0-38 12-38 21 0 11 5 14 51 20 45 6 66 14 66 46s-27 51-73 51Z" />
                                        </svg>
                                    
                                </div>
                                <div className="has-tooltip">
                                        <svg className="transition-transform hover:scale-110" fill="none" viewBox="0 0 400 400">
                                            <path fill="url(#a)" d="M199 1c-102 0-96 44-96 44v46h97v13H65S0 97 0 199c0 103 57 99 57 99h34v-47s-2-57 55-57h96s54 1 54-52V54s9-53-97-53Zm-54 31a17 17 0 1 1 0 35 17 17 0 0 1 0-35Z" />
                                            <path fill="url(#b)" d="M201 399c102 0 96-44 96-44v-46h-97v-13h135s65 7 65-96c0-102-57-98-57-98h-34v47s2 57-55 57h-96s-54-1-54 52v88s-9 53 97 53Zm54-31a17 17 0 1 1 0-35 17 17 0 0 1 0 35Z" />
                                            <defs>
                                                <linearGradient id="a" x1="38.4" x2="236.7" y1="36.8" y2={233} gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#387EB8" />
                                                    <stop offset={1} stopColor="#366994" />
                                                </linearGradient>
                                                <linearGradient id="b" x1="160.1" x2={373} y1="162.8" y2={364} gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFE052" />
                                                    <stop offset={1} stopColor="#FFC331" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    
                                </div>
                                <div className="has-tooltip">
                                        <svg fill="none" viewBox="0 0 400 400" className="transition-transform hover:scale-110">
                                            <path fill="#000" d="m264 0-64 114H71L135 0h129" opacity=".5" />
                                            <path fill="#000" d="M200 114h128L264 0H135l65 114Z" opacity=".6" />
                                            <path fill="#000" d="m135 229 65-115L135 0 71 114l64 115Z" opacity=".8" />
                                            <path fill="#000" d="m136 400 64-114h129l-65 114H136Z" opacity=".5" />
                                            <path fill="#000" d="M200 286H72l64 114h128l-64-114Z" opacity=".6" />
                                            <path fill="#000" d="m264 171-64 115 64 114 65-114-65-115Z" opacity=".8" />
                                        </svg>
                                   
                                </div>
                                <div className="has-tooltip">
                                        <svg className="transition-transform hover:scale-110" fill="none" viewBox="0 0 400 400">
                                            <path fill="#000" d="m397 195-17-10v-5l14-14a6 6 0 0 0-1-9l-19-7-1-5 11-16a6 6 0 0 0-4-9l-19-3-2-5 8-17a6 6 0 0 0-6-9l-19 1-4-4 5-19a6 6 0 0 0-7-7l-19 5-4-4 1-19a6 6 0 0 0-8-6l-18 8-5-2-3-19a6 6 0 0 0-9-4l-16 11-5-1-7-19a6 6 0 0 0-9-1l-14 14h-5L205 3a6 6 0 0 0-10 0l-10 17h-5L166 6a6 6 0 0 0-9 1l-7 19-5 1-16-11a6 6 0 0 0-9 4l-3 19-5 2-18-8a6 6 0 0 0-8 6l1 19-4 4-19-5a6 6 0 0 0-7 7l5 19-4 4-19-1c-2 0-4 1-5 3s-2 4-1 6l8 17-2 5-19 3a6 6 0 0 0-4 9l11 16-1 5-19 7a6 6 0 0 0-1 9l14 14v5L3 195a6 6 0 0 0 0 10l17 10v5L6 234a6 6 0 0 0 1 9l19 7 1 5-11 16a6 6 0 0 0 4 9l19 3 2 5-8 18a6 6 0 0 0 6 8l19-1 4 4-5 19a6 6 0 0 0 7 7l19-5 4 4-1 19a6 6 0 0 0 8 6l18-8 5 2 3 19a6 6 0 0 0 9 4l16-11 5 1 7 19a6 6 0 0 0 9 1l14-14h5l10 17a6 6 0 0 0 10 0l10-17h5l14 14a6 6 0 0 0 9-1l7-19 5-1 16 11a6 6 0 0 0 9-4l3-19 5-2 18 8a6 6 0 0 0 8-6l-1-19 4-4 19 5a6 6 0 0 0 7-7l-5-19 4-4 19 1a6 6 0 0 0 6-8l-8-18 2-5 19-3a6 6 0 0 0 4-9l-11-16 1-5 19-7a6 6 0 0 0 1-9l-14-14v-5l17-10a6 6 0 0 0 0-10ZM285 334a12 12 0 1 1 5-23 12 12 0 0 1-5 23Zm-6-38c-6-1-11 2-13 8l-6 28a146 146 0 0 1-122-1l-6-27c-1-6-7-10-12-9l-25 5-13-14h120l2-2v-42l-2-2h-35v-26h38c3 0 18 0 23 20l7 31c2 7 11 21 21 21h60l2-1-14 16-25-5Zm-165 38a12 12 0 1 1-5-23 12 12 0 0 1 5 23ZM69 150a12 12 0 1 1-22 10 12 12 0 0 1 22-10Zm-14 33 25-11c6-3 8-9 6-15l-6-12h21v94H59a146 146 0 0 1-4-56Zm112-9v-28h49c3 0 18 3 18 15 0 9-12 13-21 13h-46Zm179 25v11h-15c-2 0-2 1-2 2v7c0 16-9 20-17 21-8 0-17-4-18-8-4-26-12-31-23-40 14-10 30-23 30-42 0-20-14-32-23-39-13-8-28-10-32-10H91c21-23 50-40 82-46l18 19c4 5 11 5 15 1l21-20c43 8 79 35 100 71l-14 32c-2 5 0 12 6 14l27 12v15ZM191 39a12 12 0 1 1 17 17 12 12 0 1 1-17-17Zm139 112a12 12 0 1 1 22 9 12 12 0 1 1-22-9Z" />
                                        </svg>
                                   
                                </div>
                                <div className="has-tooltip">
                                        <svg className="transition-transform hover:scale-110" fill="none" viewBox="0 0 400 400">
                                            <path fill="#649AD2" d="M378 118c0-7-2-13-4-18-3-5-8-9-13-13L218 5c-12-7-25-7-37 1L39 87c-11 7-17 17-17 31v164c0 7 1 13 4 18s7 9 13 13l142 81c12 8 25 8 37 1l143-82c6-4 10-8 13-13s4-11 4-18V118Z" />
                                            <path fill="#004482" d="M200 199 26 300c3 5 7 9 13 13l142 81c12 8 25 8 37 1l143-82c6-4 10-8 13-13L200 199Z" />
                                            <path fill="#1A4674" d="M149 229a59 59 0 0 0 102 0l-51-30-51 30Z" />
                                            <path fill="#01589C" d="M378 118c0-7-2-13-4-18l-174 99 174 101c3-5 4-11 4-18V118Z" />
                                            <path fill="#fff" d="M368 207h-13v13h-14v-13h-13v-14h13v-13h14v13h13v14ZM200 82c43 0 81 23 102 58v1l-51 29a59 59 0 1 0 0 59l52 30A118 118 0 1 1 200 82Zm105 98v13h14v14h-14v13h-13v-13h-14v-14h14v-13h13Z" />
                                        </svg>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-stretch bg-gradient-to-b from-transparent via-white to-white text-center">
                    <span className="h-24 w-px self-center bg-gradient-to-t from-success-600 to-white" />
                    <span className="mb-6 flex h-10 w-10 items-center justify-center self-center rounded-full bg-gradient-to-r from-success-600 to-success-400 text-xl font-bold text-white">3</span>
                    <span className="mb-4 bg-gradient-to-br from-success-600 to-success-400 bg-clip-text text-[28px] font-bold uppercase leading-9 tracking-tight text-transparent">Grow</span>

                </div>

                <Technologies/>
            </section>
        </>
    )
}
