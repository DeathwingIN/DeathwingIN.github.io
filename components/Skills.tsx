import Image from "next/image";
import {Reveal} from "./ui/Reveal";

export const Skills = () => {

    return (
        <section id="skills" className="flex flex-col items-left justify-center gap-5 mb-10">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center ">
                Skills & Tools
            </h2>
            <p className="leading-7 text-center">
                My primary focus lies in frontend development and backend development.
            </p>
            <div
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 items-start lg:mx-[100px] ">
                {/* Languages */}
                <Reveal initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Languages 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* JavaScript */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">JavaScript</p>
                            </div>
                            {/* TypeScript */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">TypeScript</p>
                            </div>
                            {/* Java */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Java</p>
                            </div>
                            {/* PHP */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">PHP</p>
                            </div>
                            {/* C# */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">C#</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Frontend (Technologies and Libraries) */}
                <Reveal initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Frontend (Technologies and Libraries) 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* HTML */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">HTML</p>
                            </div>
                            {/* CSS */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">CSS</p>
                            </div>
                            {/* React */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">React</p>
                            </div>
                            {/* Angular */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Angular</p>
                            </div>
                            {/* Next.js */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Next.js</p>
                            </div>
                            {/* Bootstrap*/}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Bootstrap</p>
                            </div>
                            {/* Tailwind CSS*/}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Tailwind CSS</p>
                            </div>
                            {/* Material-UI */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Material-UI </p>
                            </div>
                            {/* Ionic  */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Ionic  </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Backend (Technologies and Frameworks) */}
                <Reveal initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Backend (Technologies and Frameworks) 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* Node.js */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Node.js</p>
                            </div>
                            {/* Spring Boot */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Spring Boot</p>
                            </div>
                            {/* Laravel */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Laravel</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Databases*/}
                <Reveal initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Databases 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* MySQL */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">MySQL</p>
                            </div>
                            {/* Microsoft SQL Server */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Microsoft SQL Server</p>
                            </div>
                            {/* MongoDB */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">MongoDB</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Cloud Platforms*/}
                <Reveal initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Cloud Platforms 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* Amazon Web Services (AWS) */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">AWS</p>
                            </div>
                            {/* Microsoft Azure */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Azure</p>
                            </div>
                            {/* GCP */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">GCP</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/*  Tools*/}
                <Reveal initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Tools 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* GitHub */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">GitHub</p>
                            </div>
                            {/* Jenkins */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Jenkins</p>
                            </div>
                            {/* Docker */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Docker</p>
                            </div>
                            {/* Kubernetes */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Kubernetes</p>
                            </div>
                            {/* GitHub Actions */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">GitHub Actions</p>
                            </div>
                            {/* Postman */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Postman </p>
                            </div>
                            {/* Figma  */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Figma </p>
                            </div>
                            {/* Trello  */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Trello </p>
                            </div>
                            {/* After Effects */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">After Effects</p>
                            </div>
                            {/* Lightroom */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Lightroom</p>
                            </div>
                            {/* Photoshop */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Photoshop</p>
                            </div>
                            {/* Premiere Pro */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-sm text-muted-foreground">Premiere Pro</p>
                            </div>

                        </div>
                    </div>
                </Reveal>
            </div>

        </section>
    );
};

