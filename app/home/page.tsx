export default function page() {
    return (
        <>
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
                {/* 1. Navbar: ส่วนหัวของเว็บ */}
                <nav className="flex justify-between items-center py-6 px-6 md:px-12 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                    <div className="text-2xl font-bold text-indigo-600 tracking-tighter cursor-pointer">
                        MyStudio<span className="text-orange-500">.</span>
                    </div>
                    <ul className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
                        <li className="hover:text-indigo-600 cursor-pointer transition">หน้าแรก</li>
                        <li className="hover:text-indigo-600 cursor-pointer transition">บริการของเรา</li>
                        <li className="hover:text-indigo-600 cursor-pointer transition">ผลงาน</li>
                        <li className="hover:text-indigo-600 cursor-pointer transition">บทความ</li>
                    </ul>
                    <button className="hidden md:block bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 font-medium text-sm">
                        ติดต่อเรา
                    </button>
                    {/* Hamburger Menu for Mobile */}
                    <button className="md:hidden text-gray-600 text-2xl">
                        ☰
                    </button>
                </nav>

                {/* 2. Hero Section: ส่วนเนื้อหาหลักด้านบน */}
                <header className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-20 max-w-7xl mx-auto">
                    <div className="md:w-1/2 space-y-8 mt-10 md:mt-0 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-wide mb-2">
                            🚀 ยินดีต้อนรับสู่อนาคต
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
                            เปลี่ยนไอเดีย <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                ให้เป็นความจริง
                            </span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            เราคือทีมผู้เชี่ยวชาญด้านครีเอทีฟและเทคโนโลยี ที่พร้อมช่วยยกระดับธุรกิจของคุณด้วยเว็บไซต์และแอปพลิเคชันที่ทันสมัย สวยงาม และทรงพลัง
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-xl hover:bg-indigo-700 transition transform hover:-translate-y-1 font-bold">
                                เริ่มต้นโปรเจกต์
                            </button>
                            <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl hover:bg-gray-50 transition font-bold flex items-center justify-center">
                                <span className="mr-2">▶</span> ดูวิดีโอแนะนำ
                            </button>
                        </div>
                        <div className="pt-4 flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-400">
                            <span>Trusted by:</span>
                            <span className="font-bold text-gray-600">Google</span>
                            <span className="font-bold text-gray-600">Meta</span>
                            <span className="font-bold text-gray-600">Netflix</span>
                        </div>
                    </div>
                    
                    {/* Hero Image / Graphic */}
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                        <div className="relative">
                            <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl rotate-3 shadow-2xl flex items-center justify-center text-white text-9xl transform hover:rotate-6 transition duration-500 cursor-pointer">
                                ✨
                            </div>
                        </div>
                    </div>
                </header>

                {/* 3. Features Section: ส่วนจุดเด่น */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">บริการที่คุณจะได้รับ</h2>
                            <p className="text-gray-500">เราใส่ใจในทุกรายละเอียด เพื่อให้มั่นใจว่าคุณจะได้รับผลลัพธ์ที่ดีที่สุด สำหรับธุรกิจและการเติบโตของคุณ</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Creative Design", desc: "ออกแบบ UI/UX ที่โดดเด่น สวยงาม และใช้งานง่าย เน้นประสบการณ์ผู้ใช้เป็นหลัก", icon: "🎨", color: "bg-blue-100 text-blue-600" },
                                { title: "Web Development", desc: "พัฒนาเว็บไซต์ด้วยเทคโนโลยีล่าสุด รวดเร็ว ปลอดภัย และรองรับ SEO", icon: "💻", color: "bg-green-100 text-green-600" },
                                { title: "Digital Marketing", desc: "วางกลยุทธ์การตลาดออนไลน์ เพื่อให้แบรนด์ของคุณเข้าถึงกลุ่มเป้าหมายได้อย่างแม่นยำ", icon: "📈", color: "bg-rose-100 text-rose-600" },
                            ].map((feature, idx) => (
                                <div key={idx} className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default">
                                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                                    <a href="#" className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-800">อ่านเพิ่มเติม →</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Call to Action (CTA): ส่วนกระตุ้นการตัดสินใจ */}
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto bg-indigo-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">พร้อมที่จะเริ่มต้นโปรเจกต์ใหม่หรือยัง?</h2>
                        <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            อย่าปล่อยให้ไอเดียของคุณเป็นเพียงความฝัน ปรึกษาเราวันนี้เพื่อรับข้อเสนอพิเศษและแผนงานที่เหมาะสมกับคุณ
                        </p>
                        <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg relative z-10">
                            ติดต่อเราตอนนี้
                        </button>
                    </div>
                </section>

                {/* 5. Footer: ส่วนท้ายเว็บ */}
                <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold text-white mb-4">MyStudio.</div>
                            <p className="text-sm">สร้างสรรค์นวัตกรรมเพื่อโลกดิจิทัลที่ดียิ่งขึ้น</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">เมนู</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">หน้าแรก</a></li>
                                <li><a href="#" className="hover:text-white">เกี่ยวกับเรา</a></li>
                                <li><a href="#" className="hover:text-white">ผลงาน</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">ช่วยเหลือ</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white">FAQs</a></li>
                                <li><a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a></li>
                                <li><a href="#" className="hover:text-white">เงื่อนไขการใช้บริการ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">ติดตามเรา</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition">F</a>
                                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">T</a>
                                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">I</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-xs border-t border-gray-800 pt-8">
                        &copy; 2025 MyStudio Inc. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    )
}
