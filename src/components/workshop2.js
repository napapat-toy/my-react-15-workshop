import { Button, Card, CardContent, Container, Typography, MobileStepper } from "@mui/material";
import { useState } from "react";
import Navbar from "./navbar";

const WorkShop2 = () => {

    const quizData = [
        {
            ID: 1,
            question: 'ข้อใดไม่ใช่ tag html',
            choices: ['<kong>', '<a>', '<p>', '<h1>'],
            correctAns: '<kong>',
            page: 1
        },
        {
            ID: 2,
            question: 'ข้อใดถูกต้องเกี่ยวกับ React',
            choices: ['ทำงานฝั่ง Server', 'ใช้จัดการฐานข้อมูล', 'เป็น JavaScrpt Library', 'ถูกทุกข้อ'],
            correctAns: 'เป็น JavaScrpt Library',
            page: 2
        },
        {
            ID: 3,
            question: 'ข้อใดคือชื่อ Browser',
            choices: ['PHP', 'React', 'MySQL', 'Chrome'],
            correctAns: 'Chrome',
            page: 3
        },
        {
            ID: 4,
            question: 'Border Style เป็นการกำหนด คุณสมบัติส่วนใด',
            choices: ['เส้นขอบ', 'พื้นหลัง', 'ขนาดข้อความ', 'ถูกทุกข้อ'],
            correctAns: 'เส้นขอบ',
            page: 4
        },
        {
            ID: 5,
            question: 'ข้อใดคือ Semantic Element ใน HTML',
            choices: ['<article>', '<footer>', '<section>', 'ถูกทุกข้อ'],
            correctAns: 'ถูกทุกข้อ',
            page: 5
        },
    ];

    const [page, setPage] = useState(0);

    const FirstPage = () => {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '450px' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: '2rem' }}>แบบทดสอบก่อนเรียน</Typography>
                    <Button variant="contained" size="large" sx={{ width: '260px', marginBottom: '1.5rem' }} onClick={handlePage}>
                        <Typography variant="h6">
                            เริ่มทำแบบทดสอบ
                        </Typography>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    const QuizPage = () => {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <QuizCard data={quizData[activeStep]} />
                <MobileStepper
                    variant="text"
                    steps={quizData.length}
                    position="static"
                    activeStep={activeStep}
                />
            </Card>
        )
    }

    const SummaryPage = () => {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '450px' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: '2rem' }}>สรุปผลการทดสอบ</Typography>
                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: '2rem' }}>{score} / {quizData.length} </Typography>
                    <Button variant="contained" size="large" sx={{ width: '260px', marginBottom: '1.5rem' }} onClick={handlePage}>
                        <Typography variant="h6">
                            ทำแบบทดสอบอีกครั้ง
                        </Typography>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    const QuizCard = ({ data }) => {
        return (
            <>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: '2rem' }}>{data.question}</Typography>
                    {data.choices.map((choise, index) => (
                        <Button variant="contained" size="large" key={index} sx={{ width: '340px', marginBottom: '1.2rem' }} onClick={() => handleNext(data.ID, choise)} >
                            <Typography variant="h6" >
                                {choise}
                            </Typography>
                        </Button>
                    ))}
                </CardContent>
            </>
        )
    }

    const allPage = [
        <FirstPage />,
        <QuizPage />,
        <SummaryPage />
    ]

    const handlePage = () => {
        if (page >= allPage.length - 1) {
            setPage(0);
            setScore(0)
        }
        else {
            setPage((prePage) => prePage + 1);
        }
    }

    const [score, setScore] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = (id, ans) => {
        if (ans === quizData[id - 1].correctAns) {
            setScore(score + 1);
        }
        if (activeStep >= 4) {
            setPage((prePage) => prePage + 1);
            setActiveStep(0)
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    return (
        <>
            <Navbar header={'Workshop 2 Quiz App'} />
            <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ mb: 2 }}>Web Development Quiz</Typography>
                <Card sx={{ width: '100%', m: 1 }}>
                    <CardContent sx={{ backgroundColor: '#c7dcff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {allPage[page]}
                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

export default WorkShop2;