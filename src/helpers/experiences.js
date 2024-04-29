import Image from "next/image";
const content = [
  {
    title: "PlayTheory Labs",
    description:
      "At Playtheory Labs, I excelled in backend development using Express.js and JavaScript, optimizing web apps. Leveraging AWS, especially Lambda Functions, I spearheaded serverless architecture for scalability. Additionally, I automated deployment processes and crafted Chrome extensions, also utilizing tools like Clerk, Stripe, and MongoDB for innovative SaaS products.",
    content: (
      <Image
        className={`mb-5 rounded-md`}
        src={"/playtheory.png"}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "3/2",
        }}
        width={0}
        height={0}
        sizes="100vw"
        alt="Image"
      ></Image>
    ),
  },
  {
    title: "DevDotCom",
    description:
      "As the Founder and Lead of DevDotCom, I spearheaded the growth of the community from inception to over 1000 members through strategic outreach and engagement initiatives. Organizing six coding events, I demonstrated proficient project management skills, fostering a collaborative environment. Additionally, I orchestrated Eastern India's largest offline Open Source event, championing collaboration and knowledge-sharing among technology enthusiasts.",
    content: (
      <Image
        className={`mb-5 rounded-md`}
        src={"/oss.jpg"}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "3/2",
        }}
        width={0}
        height={0}
        sizes="100vw"
        alt="Image"
      ></Image>
    ),
  },
  {
    title: "JISCE Coding Club",
    description:
      "As a core team member of JISCE Coding Club, I played a pivotal role in organizing multiple coding club events. Collaborating closely with fellow team members, I contributed to the seamless execution of engaging and informative events aimed at fostering a passion for coding among students. Our efforts facilitated a vibrant community where members could learn, share knowledge, and collaborate on coding projects.",
    content: (
      <Image
        className={`mb-5 rounded-md`}
        src={"/CodingClub.jpg"}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "3/2",
        }}
        width={0}
        height={0}
        sizes="100vw"
        alt="Image"
      ></Image>
    ),
  },
  {
    title: "Status Code 0",
    description:
      "Winning StatusCode 0, a 36-hour MLH hackathon hosted by IIIT Kalyani and IISER Kolkata, was incredibly rewarding. My team's collaboration, creativity, and perseverance led us to victory, showcasing our ability to innovate under pressure. It was a memorable experience filled with learning and camaraderie.",
    content: (
      <Image
        className={`mb-5 rounded-md`}
        src={"/sc0.jpg"}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "3/2",
        }}
        width={0}
        height={0}
        sizes="100vw"
        alt="Image"
      ></Image>
    ),
  },
  {
    title: "GDG Kolkata",
    description:
      "As a core team member of GDG Kolkata, I've been part of facilitating large-scale events like Devfest 2k23 Kolkata and International Women's Day celebrations. At GDG Kolkata, our focus is on fostering a vibrant community where developers, entrepreneurs, professionals, and students come together to learn, teach, and form lasting connections. It's fulfilling to contribute to an inclusive environment that promotes knowledge sharing and collaboration among tech enthusiasts.",
    content: (
      <Image
        className={`mb-5 rounded-md`}
        src={"/gdgkol.jpg"}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "3/2",
        }}
        width={0}
        height={0}
        sizes="100vw"
        alt="Image"
      ></Image>
    ),
  },
];

export default content;
