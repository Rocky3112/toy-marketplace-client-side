import { ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';

const itemData = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8u0lvmKHHjeAOGKQT7UYb64OrGJ8JCNeuQ&usqp=CAU',
        title: 'Bed',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxPB6eCAcvwqZWkfH6ssMsSdEOWIipZqN3-_Uu6BcWMzSKbM51d2egJcjvfDeKOCYRj0&usqp=CAU',
        title: 'Books',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNlzqTZ6mDF9cigrd_h91h_nKEc0XJfbuG03rzDSxoVZ6izqT4abIyaoWxzPNbIGfRgc&usqp=CAU',
        title: 'Sink',
    },
    {
        img: 'https://m.media-amazon.com/images/I/41qm+ENUfzS._SS400_.jpg',
        title: 'Kitchen',
    },
    {
        img: 'https://images.tokopedia.net/img/cache/500-square/product-1/2020/6/8/batch-upload/batch-upload_84390c12-a344-483f-ac44-edc4e50da8cc',
        title: 'Blinds',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5UXwARCnNnruQUEjA4DeWQ-xr_LU1Zy2c3GAdlvhk9oDi-cMKlPSSOiIOp3c-MK-_kA&usqp=CAU',
        title: 'Chairs',
    },
    {
        img: 'https://m.media-amazon.com/images/I/61tK17axP6L.jpg',
        title: 'Laptop',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYae-_YFrRAQPEyo3s-E5Ql28CsUE_ffUx4P2N4ifplpHhWqPhw1ox290i64t2yza4bTU&usqp=CAU',
        title: 'Doors',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNlzqTZ6mDF9cigrd_h91h_nKEc0XJfbuG03rzDSxoVZ6izqT4abIyaoWxzPNbIGfRgc&usqp=CAU',
        title: 'Coffee',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxPB6eCAcvwqZWkfH6ssMsSdEOWIipZqN3-_Uu6BcWMzSKbM51d2egJcjvfDeKOCYRj0&usqp=CAU',
        title: 'Storage',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKObAM6FYlu2VOmApVoHg5JxM-4VpsUOhsf2Hd6IsdXl5IKi7t9bcaI9GGs8AJmP10GU&usqp=CAU',
        title: 'Candle',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxPB6eCAcvwqZWkfH6ssMsSdEOWIipZqN3-_Uu6BcWMzSKbM51d2egJcjvfDeKOCYRj0&usqp=CAU',
        title: 'Coffee table',
    },
];

const NewArrival = () => {
    return (
        <div className='max-w-2xl mx-auto'>
            <Box sx={{ width: 900, height: 750, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
};

export default NewArrival;


