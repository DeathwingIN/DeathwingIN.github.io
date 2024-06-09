import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Imesh Nirmal",
    description: "Aspiring Software Engineer with a Passion for Cloud and DevOps - Seeking Internships\n" +
        "\n" +
        "Hello! I'm [Your Name], a second-year undergraduate student specializing in Software Engineering. With a strong foundation in programming, cloud computing, and DevOps, I'm eager to bring my skills to a forward-thinking team.\n" +
        "\n" +
        "Key Skills and Technologies:\n" +
        "Programming Languages: Proficient in Python, Java, and JavaScript.\n" +
        "Cloud Platforms: Experienced with AWS, Azure, and Google Cloud.\n" +
        "DevOps Tools: Familiar with Docker, Kubernetes, Jenkins, and Git.\n" +
        "Web Development: Knowledgeable in HTML, CSS, React, and Node.js.\n" +
        "What I Offer:\n" +
        "Problem-Solving: Analytical thinker with a knack for solving complex problems.\n" +
        "Team Collaboration: Proven ability to work effectively in team settings.\n" +
        "Continuous Learning: Always eager to learn new technologies and improve my skill set.\n" +
        "Project Experience: Completed several projects showcasing my ability to build and deploy scalable applications.\n" +
        "Projects:\n" +
        "Cloud-Based Web App: Developed a scalable web application hosted on AWS, utilizing EC2, S3, and Lambda.\n" +
        "CI/CD Pipeline: Implemented a continuous integration and deployment pipeline using Jenkins and Docker.\n" +
        "DevOps Automation: Automated deployment processes with Kubernetes and Terraform.\n" +
        "Education:\n" +
        "Bachelor of Science in Computer Science - [Your University], [Graduation Year]\n" +
        "Certifications:\n" +
        "Microsoft Certified: Azure Fundamentals\n" +
        "Why Hire Me?\n" +
        "As a proactive and dedicated software engineering student, I am passionate about using technology to solve " +
        "real-world problems. My hands-on experience in cloud computing and DevOps, combined with my academic background, makes me a strong candidate " +
        "for internships in these fields. I'm excited to contribute to innovative projects " +
        "and grow professionally in a dynamic environmen",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
