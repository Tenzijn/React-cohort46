import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Spacer,
  Box,
} from '@chakra-ui/react';

type ProductCardProps = {
  id: number;
  key: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <Card maxW='md'>
      <CardHeader>
        <Image
          boxSize='300px'
          src={props.image}
          alt={props.description}
          borderRadius='lg'
        />
      </CardHeader>
      <CardBody
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Box>
          <Heading size='md'>{props.title}</Heading>
        </Box>
        <Box>
          <Text color='blue.600' fontSize='2xl'>
            $ {props.price}
          </Text>
        </Box>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing={'auto'} w={'100%'}>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Spacer />
          <Button variant='ghost' colorScheme='blue'>
            More Info
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
