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
                <Reveal initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Languages 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* JavaScript */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="mt-5 mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        preserveAspectRatio="xMidYMid"
                                        viewBox="0 0 256 256"
                                    >
                                        <path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path>
                                        <path
                                            d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path>
                                    </svg>
                                </span>

                                <p className="text-sm text-muted-foreground  ">JavaScript</p>
                            </div>
                            {/* TypeScript */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="mt-5 mb-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        preserveAspectRatio="xMidYMid"
                                        viewBox="0 0 256 256"
                                    >
                                      <path
                                          fill="#007ACC"
                                          d="M0 128L0 0 128 0 256 0 256 128 256 256 128 256 0 256z"
                                          transform="matrix(1 0 0 -1 0 256)"
                                      ></path>
                                      <path
                                          fill="#FFF"
                                          d="M56.611 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.399-.244-44.983-.203l-44.739.122-.122 10.443zM206.567 118.108c6.501 1.626 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.08.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.52-3.291-4.794-6.745-6.867-12.028-7.232-7.76-.529-12.759 3.535-12.718 10.32 0 1.992.284 3.17 1.097 4.796 1.707 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.25 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.88-28.323 20.277-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.13 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.243-17.595-10.24-13.206-5.69-18.895-9.225-24.096-14.833-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.57z"
                                      ></path>
                                 </svg>
                                </span>
                                <p className="text-sm text-muted-foreground">TypeScript</p>
                            </div>
                            {/* Java */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="mt-5 mb-2"></span>
                                <p className="text-sm text-muted-foreground">Java</p>
                            </div>
                            {/* PHP */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="mt-5 mb-2"></span>
                                <p className="text-sm text-muted-foreground">PHP</p>
                            </div>
                            {/* C# */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="mt-5 mb-2"></span>
                                <p className="text-sm text-muted-foreground">C#</p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Backend (Technologies and Frameworks) */}
                <Reveal initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}>
                    <div className="flex flex-col  gap-2  ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                            Backend (Technologies and Frameworks) 👨🏻‍💻
                        </h3>
                        <div className="flex flex-row flex-wrap  gap-4">
                            {/* Node.js */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="mt-5 mb-2"></span>
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
                <Reveal initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}>
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
                <Reveal initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}>
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
                {/* Frontend (Technologies and Libraries) */}
                <Reveal initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}>
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
                                <p className="text-sm text-muted-foreground">Ionic </p>
                            </div>
                        </div>
                    </div>
                </Reveal>


            </div>






            <div
                className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 items-start lg:mx-[100px] ">
                {/*  Tools*/}
                <Reveal initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}>
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

