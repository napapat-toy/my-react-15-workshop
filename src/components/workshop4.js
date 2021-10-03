import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import Navbar from "./navbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Workshop4 = () => {
    return (
        <div style={{ backgroundColor: '#def1ff', }}>
            <Navbar header="Workshop 4 Accordion" />
            <Container maxWidth="lg" sx={{ padding: '2rem' }}>
                <Typography variant="h4" gutterBottom>เครื่องมือพัฒนาเว็บประจำปี 2021</Typography>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4">React</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            คือ JavaScript Library ที่ใช้สำหรับสร้าง User Interface (UI) หรือหน้าจอของแอปพลิเคชั่น ถูกพัฒนาขึ้นโดย Facebook
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4">Javascript</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            เป็นภาษาคอมพิวเตอร์ที่ใช้ในการพัฒนาเว็บร่วมกับ HTML เพื่อให้เว็บมีลักษณะแบบไดนามิก คือ เว็บสามารถตอบสนองกับผู้ใช้งานหรือแสดงเนื้อหาที่แตกต่างกันไปโดยจะอ้างอิงตามเว็บบราวเซอร์ที่ผู้เข้าชมเว็บใช้งานอยู่
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4">Bootstrap</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Frontend Framework ที่รวม HTML, CSS และ JS เข้าด้วยกันเป็นชุดคำสั่งที่ถูกพัฒนาขึ้นมาเพื่อกำหนดมาตรฐานหรือรูปแบบการพัฒนาเว็บไซด์ในส่วนของ User Interface (UI)
                            และทำให้เว็บรองรับการแสดงผลขนาดหน้าจอที่แตกต่างกันอีกด้วย สรุปก็คือ CSS Framework
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Container>
        </div>
    )
};

export default Workshop4;