import Navbar from './navbar';
import { Card, CardContent, TextField, Typography, Button, Container } from '@mui/material';
import { useState } from 'react';

const WorkShop1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [nameError, setNameError] = useState({ error: false, helper: '' })
    const [emailError, setEmailError] = useState({ error: false, helper: '' })
    const [passwordError, setPasswordError] = useState({ error: false, helper: '' })
    const [confirmPasswordError, setConfirmPasswordError] = useState({ error: false, helper: '' })

    const handleSubmit = (e) => {
        e.preventDefault();

        // Name
        if (formData.name.length <= 8) {
            setNameError({ error: true, helper: 'ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร' });
        }
        else {
            setNameError({ error: false, helper: '' });
        };


        // Email
        if (!(formData.email.includes('@') || formData.email.includes('.com'))) {
            setEmailError({ error: true, helper: 'รูปแบบอีเมลไม่ถูกต้อง' });
        }
        else {
            setEmailError({ error: false, helper: '' });
        };

        // Password
        if (formData.password.length <= 8) {
            setPasswordError({ error: true, helper: 'ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร' } );
        }
        else {
            setPasswordError({ error: false, helper: '' } );
        };

        // Comfirm Password
        if (!formData.confirmPassword) {
            setConfirmPasswordError({ error: true, helper: 'ป้อนรหัสผ่าน' } );
        } else if (formData.confirmPassword !== formData.password) {
            setConfirmPasswordError({ error: true, helper: 'รหัสผ่านไม่ตรงกัน' } );
        }
        else {
            setConfirmPasswordError({ error: false, helper: '' } );
        };
        // console.log(formError);
    };

    return (
        <>
            <Navbar header={'Workshop 1 Form Validator'} />
            <Container maxWidth="xs">
                <Card sx={{ minWidth: 275, display: 'flex', alignItems: 'center' }} raised={true} >
                    <CardContent>
                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <Typography variant="h4">แบบฟอร์มการลงทะเบียน</Typography>
                            <TextField
                                id="username"
                                label="ชื่อผู้ใช้"
                                variant="outlined"
                                type="text"
                                margin="normal"
                                fullWidth
                                error={nameError.error}
                                helperText={nameError.helper}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <TextField
                                id="email"
                                label="อีเมล"
                                variant="outlined"
                                type="email"
                                margin="normal"
                                fullWidth
                                error={emailError.error}
                                helperText={emailError.helper}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <TextField
                                id="password"
                                label="รหัสผ่าน"
                                variant="outlined"
                                type="password"
                                margin="normal"
                                fullWidth
                                error={passwordError.error}
                                helperText={passwordError.helper}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <TextField
                                id="comfirm-password"
                                label="ยืนยันรหัสผ่าน"
                                variant="outlined"
                                type="password"
                                margin="dense"
                                fullWidth
                                error={confirmPasswordError.error}
                                helperText={confirmPasswordError.helper}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                            <Button variant="contained" size="large" fullWidth sx={{ marginTop: 2 }} type="submit">ลงทะเบียน</Button>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default WorkShop1;