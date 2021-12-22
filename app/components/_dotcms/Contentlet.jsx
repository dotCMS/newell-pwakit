import React from 'react'
import PropTypes from 'prop-types'
import {Text, Image, Button} from '@chakra-ui/react'

const Components = {
    // eslint-disable-next-line react/display-name
    webPageContent: ({title, body, image}) => {
        return (
            <>
                <Image
                    maxHeight={200}
                    boxSize="100%"
                    objectFit="cover"
                    src={`http://localhost:8080/dA/${image}`}
                    alt={title}
                    marginBottom={4}
                />
                <Text fontSize="2xl" marginBottom={2}>
                    {title}
                </Text>
                <div dangerouslySetInnerHTML={{__html: body}} />
            </>
        )
    },
    Product: ({name, description, image}) => {
        return (
            <>
                <Image
                    maxHeight={250}
                    boxSize="100%"
                    objectFit="cover"
                    src={`http://localhost:8080${image}`}
                    alt={name}
                    marginBottom={4}
                />
                <Text fontSize="2xl" marginBottom={2}>
                    {name}
                </Text>
                <Text marginBottom={4}>{description}</Text>
                <Button colorScheme='blue'>Buy Now</Button>
            </>
        )
    }
}

function Fallback() {
    return null
}

export const Contentlet = ({data}) => {
    const Component = Components[data.contentType] || Fallback
    return <Component {...data} />
}

Contentlet.propTypes = {
    contentlet: PropTypes.object
}
