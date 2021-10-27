import Navbar from "./navbar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from "@mui/system";

const Workshop7 = () => {

    const imageURL = [
        'https://images.unsplash.com/photo-1581224463294-908316338239?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Navbar header="Workshop 7 Image Carousel" />
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {imageURL.map((image, index) => (
                    <Box key={index} sx={{ maxHeight: 720, maxWidth: 1280, textAlign: 'center' }} raised={true}>
                        <img src={image} alt="" />
                    </Box>
                ))}
            </Carousel>
        </>
    );
};

export default Workshop7;