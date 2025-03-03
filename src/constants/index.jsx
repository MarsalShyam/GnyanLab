import hero from "../assets/nor.avif"
import db from "../assets/db.jpg"
import kksir from "../assets/contributorImg/kksir.png"
import cloudimg from "../assets/cloudimg.jpg"
import bigdataimg from "../assets/bigdataimg.avif"
import iotimg from "../assets/iotimg.jpg"
import multimediaimg from "../assets/multimediaimg.avif"
import sdnimg from "../assets/sdnimg.jpg"
// import ooseimg from "../assets/ooseimg.png"
import oose from "../assets/oose.jpg"


export const LINKS = [
    { text: "I year", targetId: "options" },
    { text: "II year", targetId: "options" },
    { text: "III year", targetId: "options" },
    { text: "IV year", targetId: "options" },
    { text: "About", targetId: "about" },
    // { text: "Mission", targetId: "mission" },
    // { text: "Review", targetId: "review" },
    { text: "ContactUs", targetId: "contact" },
  ];

  export const IYEAR=[
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
  ]
  export const IIYEAR=[
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image: hero,
      title: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon and cheese",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
  ]

  export const IIIYEAR=[
    {
      id:"cc",
      image: cloudimg,
      title: "CLOUD COMPUTING",
      description: "Mastering Cloud Architecture, Virtualization, and Security: Exploring Models, Infrastructure, and Deployment Strategies to Build Scalable and Secure Cloud Solutions",
      authpic:kksir,
      author:"Mr.R.Krishna Kumar, AP/CSE",
      link: "/cloud-computing",
      experiment:[
        {
          id:"exp1",
          expno:1,
          name:"1. Install Virtualbox/VMware/ Equivalent open source cloud Workstation with different flavours of Linux or Windows OS on top of windows 8 and above.",
        },
        {
          id:"exp2",
          expno:2,
          name:"2. Install a C compiler in the virtual machine created using a virtual box and execute Simple Programs.",
        },
        {
          id:"exp3",
          expno:3,
          name:"3. Install Google App Engine. Create a hello world app and other simple web applications using python/java."
        },
        {
          id:"exp4",
          expno:4,
          name:"4. Use the GAE launcher to launch the web applications."
        },
        {
          id:"exp5",
          expno:5,
          name:"5. Simulate a cloud scenario using CloudSim and run a scheduling algorithm that is not present in CloudSim."
        },
        {
          id:"exp6",
          expno:6,
          name:"6. Find a procedure to transfer the files from one virtual machine to another virtual machine."
        },
        {
          id:"exp7",
          expno:7,
          name:"7. Install Hadoop single node cluster and run simple applications like wordcount."
        },
        {
          id:"exp8",
          expno:8,
          name:"8. Creating and Executing Your First Container Using Docker."
        },
        {
          id:"exp9",
          expno:9,
          name:"9. Run a Container from Docker Hub."
        },
      ]
    },
    {
      id:"esiot",
      image: iotimg,
      title: "EMBEDDED SYSTEMS AND IOT",
      description: "Mastering Embedded Systems and IoT: From I/O Interfacing to Building Low-Cost, Real-World Solutions with Arduino, Raspberry Pi, and Open Platforms",
      authpic:db,
      author:"Mrs.P.Vaijayanthi, AP/CSE",
      link: "/proto-type"
    },
    {
      id:"bd",
      image: bigdataimg,
      title: "BIG DATA ANALYTICS",
      description: "From Big Data Fundamentals to Advanced Analytics: Mastering NoSQL, Hadoop, and MapReduce for Real-World Data Challenges",
      authpic:db,
      author:"Mr.K.Vijayprabakaran, AP/CSE",
      link: "/proto-type"
    },
    {
      id:"mm",
      image: multimediaimg,
      title: "Multimedia and Animation",
      description: "Comprehensive Guide to Multimedia and Animation: A Lab Manual for Learning Design Principles, Tools, and Practical Applications in an Academic Setting",
      authpic:db,
      author:"Ms.S.Pavithra, AP/CSE",
      link: "/proto-type"
    },
    {
      id:"sdn",
      image: sdnimg,
      title: "Software Defined Networks",
      description: "Mastering Software Defined Networks: A Comprehensive Lab Manual for Designing, Configuring, and Managing Programmable, Scalable, and Future-Ready Network Architectures Using Cutting-Edge Tools and Techniques",
      authpic:db,
      author:"Mr.Venkatasan, AP/CSE",
      link: "/proto-type"
    },
    {
      id:"oose",
      image: oose,
      // title: "Object Oriented Software Engeneering",
      title:"OOSE",
      description: "Mastering Object-Oriented Software Engineering: A Comprehensive Lab Manual for Designing, Developing, and Deploying Robust, Scalable, and Maintainable Software Systems Using Modern Principles and Best Practices",
      authpic:db,
      author:"Mrs.P.Sathyasutha, AP/CSE",
      link: "/proto-type"
    }
  ]
  export const IVYEAR=[
    {
      image:hero,
      title:"subject",
      description:"It is the best subject ever i seem",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image:hero,
      title:"subject",
      description:"It is the best subject ever i seem",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image:hero,
      title:"subject",
      description:"It is the best subject ever i seem",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    },
    {
      image:hero,
      title:"subject",
      description:"It is the best subject ever i seem",
      authpic:db,
      author:"ganesh",
      link: "/proto-type"
    }
  ]

  export const ABOUT = {
    header: "From Code to Concept: Mastering Lab Skills!",
    content:
      "The Lab Practical Solution Hub is a student-focused platform offering comprehensive resources for computer science and engineering lab practicals. We provide step-by-step documentation, instructional videos, and text-based solutions to simplify learning and enhance understanding. Aligned with the goals of our department, established in 2006 and affiliated with Anna University, we emphasize hands-on skills in programming, networking, software engineering, and more. Our open-source GitHub repository encourages collaboration, allowing students to contribute and improve shared resources. Designed to complement classroom learning, this platform empowers students to master lab exercises, upskill in modern technologies, and excel in their academic and professional journeys. Join us to learn, share, and innovate!",
  };

  
  export const ex2codeString = `#include <stdio.h>
  int main() {
      printf("Hello, World!\\n");
      return 0;
  }
  // Additional lines for demonstration
  int add(int a, int b) {
      return a + b;
  }
  void greet() {
      printf("Welcome to the program!\\n");
  }`;