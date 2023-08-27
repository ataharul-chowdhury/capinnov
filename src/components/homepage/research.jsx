import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Box, ListItem, ListItemText } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function QuiltedImageList() {

    const [renderItem, setRenderItem] = React.useState(itemData[0])

	return (
        <Box>
            <ImageList
                sx={{ width: '100%' }}
                variant="quilted"
                cols={5}
                rowHeight={100}
            >
                {itemData.map((item) => (
                    <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                        onClick={() => setRenderItem(item)}
                        sx={{
                            padding: '5px',
                            '&:hover': { 
                                cursor: 'pointer',
                                border: '1px solid black',
                            }
                        }}
                    >
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <ListItem>
                <ListItemText primary={renderItem.header} secondary={renderItem.body} />
            </ListItem>
        </Box>
	);
}

const itemData = [
	{
		img: "https://capinnov.ca/wp-content/uploads/2020/06/OMAFRA-LOGO.jpg",
		title: "Breakfast",
        header: "header",
        body: "body"
	},
	{
		img: "https://capinnov.ca/wp-content/uploads/2020/06/SSHRCLogo.png",
		title: "Burger",
        header: "header",
        body: "body"
	},
	{
		img: "https://capinnov.ca/wp-content/uploads/2020/06/cgiar.jpg",
		title: "Camera",
        header: "header",
        body: "body"
	},
	{
		img: "https://capinnov.ca/wp-content/uploads/2020/06/Food-AO_logo.svg_.png",
		title: "Coffee",
        header: "header",
        body: "body"
	},
	{
		img: "https://capinnov.ca/wp-content/uploads/2020/06/west-indies.png",
		title: "Hats",
        header: "header",
        body: "body"
	}
];
