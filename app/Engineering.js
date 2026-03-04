import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
import { Link } from 'expo-router'
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import HeaderChunk from "../components/Templates/HeaderChunk"
import InfoChunk from "../components/Templates/Chunk2Info"
import Chunk2L from "../components/Templates/Chunk2L"
import Chunk2R from "../components/Templates/Chunk2R"
import Footer from "../components/footer"
import Chunk1 from "../components/Templates/Chunk1"
import ImagelessInfoChunk from "../components/Templates/ImagelessInfoChunk"
import { YouTubePlayer } from "../components/Youtube"
import EngineeringRoadmap from "../assets/ENGRG/EngineeringRoadmap.png"

export default function Engi() {
    const { height, width } = useWindowDimensions()
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/ENGRG/MiscImages/engineeringbackground.jpg')}>
                <ScrollView>
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <HeaderChunk header={"Engineering"} />
                    <Image source={EngineeringRoadmap} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <View style={{ alignItems: "center", justifyContent: "center", }}>
                        <YouTubePlayer rel={false} loop={false} videoId="rjP92bgib88" style={{ width: 0.5 * width, height: 0.25 * width, alignItems: "center", }} />
                    </View>
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L header={"Related Classes"} info={
                        <>
                            <InfoChunk
                                infoHeader={"Foundations of Engineering Technology"}
                                infoBody={"Foundations of Engineering Technology is an introductory course designed to inform students about careers in engineering. This" +
                                    " course serves as the foundation course for the Engineering program of study. Upon completion of this course, a proficient student" +
                                    " will have foundational knowledge of the engineering design process, sketching and technical drawing techniques, and foundational" +
                                    " elements to engineering and the role of math."}
                                image={require('../assets/ENGRG/MiscImages/Catapults.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Engineering Tech 1"}
                                infoBody={"Engineering Technology 1" +
                                    " is the second course in the Engineering program of study and is designed to provide students an in-depth study of a variety" +
                                    " of engineering fields via real world engineering design challenges. Students will apply their understanding of physics, chemistry," +
                                    " biology, along with computer-integrated manufacturing technology to develop/design, test, and improve their design solutions." +
                                    " Technical reading/writing/presentation and related mathematics and science knowledge and skills will be integrated and applied" +
                                    " throughout the course. Many of these skills will be carried out through the use of CAD programs to bring creations alive with 3D" +
                                    " printers."}
                                image={require('../assets/ENGRG/MiscImages/FloorSketech.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Engineering Tech 2"}
                                infoBody={
                                    "Engineering 2 is the third course in the Engineering program of study designed to provide students with the opportunity to apply" +
                                    " skills learned in previous courses and continue to grow and strengthen their individual engineering design process. Upon" +
                                    " completion of the course, a proficient student will have additional concepts of engineering, such as kinematics and kinetics," +
                                    " electrical, advanced drawings, and the opportunity to apply learned knowledge and skills across design projects."
                                }
                                image={require('../assets/ENGRG/MiscImages/InverseKinematics.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Engineering Tech 3"}
                                infoBody={
                                    "Engineering 3 is the fourth course in the Engineering program of study that provides students the opportunity to apply academic" +
                                    " and technical skills learned in previous courses through individual and team projects. Upon completion of the course, a proficient" +
                                    " student will be able to apply advanced technical drawing and engineering design techniques to civil and mechanical engineering" +
                                    " challenges. As part of the student’s program of study progression, the student will maintain a digital program of study portfolio" +
                                    " providing evidence of mastery of the course standards and readiness to advance and complete the program of study."
                                }
                                image={require('../assets/ENGRG/MiscImages/MechENGRG.png')}
                            />
                        </>
                    } />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header={"Foundations Curriculum"}
                        info={
                            <>
                                <InfoChunk
                                    infoHeader={"Engineering Design Process"}
                                    infoBody={
                                        "Students will explore civil engineering and use the Engineering Design Process to design, build, and iterate a popsicle stick bridge using limited materials to hold up as much weight as possible."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Bridge Project"}
                                    infoBody={
                                        "Students are tasked with creating a bridge that can hold the most weight. Students are given a set amount of materials to use and must use their engineering skills to create the best bridge possible."
                                    }
                                    image={require('../assets/ENGRG/MiscImages/bridge.png')}
                                />
                                <InfoChunk
                                    infoHeader={"Catapult Project"}
                                    infoBody={
                                        "Students will explore mechanical engineering and use the engineering design process to design, build, and iterate on a small scale then larger scale catapult type of machine to launch an egg the farthest. Also design and build a vehicle to protect the egg from breaking in the launch."
                                    }
                                    image={require('../assets/ENGRG/MiscImages/Catapult.png')}
                                />
                                <InfoChunk
                                    infoHeader={"Snap Circuits"}
                                    infoBody={
                                        "Students are tasked with creating a circuit that can light up a lightbulb. Students are given a set amount of materials to use and must use their engineering skills to create the best circuit possible."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Airplane/Rocket Project"}
                                    infoBody={
                                        "Students will explore aeronautical engineering and use the Engineering Design Process to design, build, and iterate paper airplanes, plastic model airplanes, and model rockets to be able to improve their flight time, distance, and stability of the plane."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                            </>
                        }
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header={"Engineering Tech 1 Curriculum"}
                        info={
                            <>
                                <InfoChunk
                                    infoHeader={"Basic Modeling and Design"}
                                    infoBody={
                                        "Students will explore Basic Modeling and Design to create a 3D model of a simple object using CAD software. Students will learn the basics of CAD software and how to use it to create 3D models."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Toy Project"}
                                    infoBody={
                                        "Students will explore mechanical engineering and use the engineering design process to design, build, and iterate on a toy that can be used by children. Students will learn how to use CAD software to create 3D models of their toys and how to use 3D printers to create their toys."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"3D Modeling"}
                                    infoBody={
                                        "Students will learn how to use CAD software to create 3D models "
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Real Life Problem Solving"}
                                    infoBody={
                                        "Students will be tasked with solving a real life problem using the engineering design process. Students will learn how to identify a problem, brainstorm solutions, and create a prototype of their solution."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Puzzle Cube"}
                                    infoBody={
                                        "Students will explore mechanical engineering and use the engineering design process to design, build, and iterate on a puzzle cube. Students will learn how to use CAD software to create 3D models of their puzzle cubes and how to use 3D printers to create their puzzle cubes."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"House Project"}
                                    infoBody={
                                        "Students will explore civil engineering to design and create a house."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                            </>
                        }
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header={"Engineering Tech 2 Curriculum"}
                        info={
                            <>
                                <InfoChunk
                                    infoHeader={"Physics"}
                                    infoBody={
                                        "Kinematics, Free Body Diagrams, and Mechanical Advantage"
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Community Problem Solving"}
                                    infoBody={
                                        "Students will use the Engineering Design Process to design, build, and iterate on a community problem they have identified within their community. The goal of this is to have students try to improve their community around them and to practice identifying and designing solutions in the real world."
                                    }
                                    image={require('../assets/ENGRG/MiscImages/communityPrj2.png')}
                                />
                                <InfoChunk
                                    infoHeader={"Ethics"}
                                    infoBody={
                                        "Students will learn about the ethics of engineering and how to apply it to their designs."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Reverse Engineering"}
                                    infoBody={
                                        "Students will learn how to reverse engineer a product and how to use the engineering design process to improve upon it. Students will learn how to take apart a product, identify its components, and create a new design based on their findings."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Material Properties"}
                                    infoBody={
                                        "Students will learn about the properties of different materials and how to choose the right material for their designs."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Hydraulic Arm Project"}
                                    infoBody={
                                        "Students will use the Engineering Design Process to design, build, and iterate on creating a hydraulic claw/arm to move items with accuracy using hydraulics"
                                    }
                                    image={require('../assets/ENGRG/MiscImages/arm.png')}
                                />
                            </>
                        }
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header={"Engineering Tech 3 Curriculum"}
                        info={
                            <>
                                <InfoChunk
                                    infoHeader={"College Prep Application"}
                                    infoBody={
                                        "Students will learn how to apply to colleges and what to expect when applying to colleges. Students will learn how to write a college essay and how to fill out a college application."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Local Design Challenge"}
                                    infoBody={
                                        "Students will use the Engineering Design Process to design, build, and iterate again on a community problem they have identified within their community. The goal of this is to have students try to improve their community around them and to practice identifying and designing solutions in the real world."
                                    }
                                    image={require('../assets/ENGRG/MiscImages/communityPrj.png')}
                                />
                                <InfoChunk
                                    infoHeader={"Communication"}
                                    infoBody={
                                        "Students will learn how to communicate their designs and ideas to others. Students will learn how to create a presentation and how to present there ideas."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"Quality Management"}
                                    infoBody={
                                        "Students will learn and practice quality management. Students will learn how to identify and manage quality in their designs and how to improve the quality of their designs."
                                    }
                                    image={require('../assets/placeholder.jpg')}
                                />
                            </>
                        }
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header={"3D Modeling & Printing"}
                        info={
                            <>
                                <InfoChunk
                                    infoHeader={"6 LulzBot 3D Printers"}
                                    image={require('../assets/ENGRG/MiscImages/lulzbot.png')}
                                />
                                <InfoChunk
                                    infoHeader={"5 Bambu XICarbon 3D Printers"}
                                    image={require('../assets/ENGRG/MiscImages/creatorPro.jpg')}
                                />
                                <InfoChunk
                                    infoHeader={"1 Flashforge Creator Pro 3D Printer"}
                                    image={require('../assets/ENGRG/MiscImages/bambu.webp')}
                                />
                                <ImagelessInfoChunk
                                    infoBody={"For our engineering programs we have many 3D printers for students to use for design and prototyping practice."}
                                />
                            </>
                        }
                    />
                    <View style={{ marginTop: width * 0.05, }}></View>
                    <Chunk2L header={"Clubs"} info={
                        <InfoChunk
                            infoHeader={"Robotics Club"}
                            infoBody={
                                "The robotics club teaches it's club memebers how to use, assemble and program robots. The robotics club participates in the" +
                                " VEX Robotics Tournament and FIRST Robotics Competition every year as the Mechahunes of Team #2348."
                            }
                            image={require('../assets/ENGRG/MiscImages/Mechahunes.png')}
                        />
                    } />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L header={"Teachers"} info={
                        <>
                            <InfoChunk
                                infoHeader={"Mr. Hashizume"}
                                infoBody={
                                    "Teaches Engineering Tech II as well as Engineering Tech III."
                                }
                                image={require('../assets/ENGRG/TeacherIMGS/Hashizume.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Mr. Komar"}
                                infoBody={
                                    "Teaches Engineering Tech I. He also teaches AP Seminar and AP Research."
                                }
                                image={require('../assets/ENGRG/TeacherIMGS/Komar.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Mr. Murray"}
                                infoBody={
                                    "Teaches Foundations of Engineering Technology."
                                }
                                image={require('../assets/ENGRG/TeacherIMGS/Murray.jpg')}
                            />
                        </>
                    } />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header={"Industry Certification"}
                        info={
                            <InfoChunk
                                image={require('../assets/Stock_Portrait.png')}
                            />
                        }
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L header={"Suggested Courses"} info={
                        <>
                            <ImagelessInfoChunk
                                infoHeader={"4 Years of Math"}
                                infoBody={
                                    "Depending on what core classes you receive, your fourth year of math might be Trigonometry/Precalculus, Calculus, AP Calculus A/B and AP Calculus B/C." +
                                    " It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics"
                                }
                            />
                            <ImagelessInfoChunk
                                infoHeader={"4 Years of Science"}
                                infoBody={
                                    "Your fourth year of science might be AP Physics." +
                                    " It's recommended to move onto AP Physics rather than AP Chemistry, AP Biology, or AP Environmental Science"
                                }
                            />
                            <ImagelessInfoChunk
                                infoHeader={"Foundations of Business"}
                                infoBody={
                                    "Refer to the Business page for more information on the class."
                                }
                            />
                            <ImagelessInfoChunk
                                infoHeader={"Weight Training or Team Sports"}
                                infoBody={
                                    "You might want to take Weight Training or Team Sports as a second elective as to build the strength typically found within the field. Of course, not all engineering roles involve heavy lifting, making it optional based on what branch of engineering you're going into"
                                }
                            />
                            <Chunk1
                                header={"For More Information"}
                                buttonlabel={"Moanalua High School Course Catalog"}
                                link={"https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=34"}
                                image={require('../assets/mohslogo.png')}
                            />
                        </>
                    } />
                    <Footer />
                </ScrollView >
            </ImageBackground >
        </View >
    )
}


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    bgImg: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover'
    },
})
