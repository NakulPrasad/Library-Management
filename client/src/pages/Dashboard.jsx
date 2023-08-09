import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetBooksQuery } from "state/api";

const Product = ({
  _id,
  title,
  authors,
  average_rating,
  language_code,
  publisher,
  publication_date,
  quantity,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[300]}
          gutterBottom
        >
          {publisher}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[300]}>
          ${Number(average_rating).toFixed(2)}
        </Typography>
        <Rating value={language_code} readOnly />

        <Typography variant="body2">{authors}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>publication_date Left: {publication_date}</Typography>
          <Typography>Yearly Sales This Year: 1</Typography>
          <Typography>Yearly Units Sold This Year: 1</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Dashboard = () => {
  //we get isLoading from redux: true : data is processing to appear on frontend
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const { data, isLoading } = useGetBooksQuery();
  // console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Books" subtitle="List of all available books" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              bookID,
              title,
              authors,
              average_rating,
              language_code,
              publisher,
              publication_date,
              quantity,
            }) => (
              <Product
                key={bookID}
                _id={bookID}
                title={title}
                authors={authors}
                average_rating={average_rating}
                language_code={language_code}
                publisher={publisher}
                publication_date={publication_date}
                quantity={quantity}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Dashboard;
