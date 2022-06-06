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
                    src={`http://localhost:8080/${image}`}
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
        console.log(image);
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
                <Button colorScheme="blue">Buy Now</Button>
            </>
        )
    }
}

function Fallback() {
    return null
}

function ContentletWrapper({
    inode,
    identifier,
    contentType,
    baseType,
    dotLang,
    title,
    canEdit,
    dotContentTypeId,
    children
}) {
    return (
        <div
            data-dot-object="contentlet"
            data-dot-inode={inode}
            data-dot-identifier={identifier}
            data-dot-type={contentType}
            data-dot-basetype={baseType}
            data-dot-lang={dotLang}
            data-dot-title={title}
            data-dot-can-edit={canEdit}
            data-dot-content-type-id={dotContentTypeId}
            data-dot-has-page-lang-version="true"
        >
            {children}
        </div>
    )
}

export const Contentlet = ({data}) => {
    const Component = Components[data.contentType] || Fallback
    return <ContentletWrapper {...data}><Component {...data} /></ContentletWrapper>
}

Contentlet.propTypes = {
    contentlet: PropTypes.object
}
