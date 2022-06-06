import React from 'react'
import PropTypes from 'prop-types'

import {Grid, GridItem, Box} from '@chakra-ui/react'

import {Contentlet} from './Contentlet'

function ContainerWrapper({acceptTypes, inode, identifier, uuid, maxContentlets, children}) {
    console.log({acceptTypes, inode, identifier, uuid, maxContentlets})
    return (
        <div
            style={{display: 'block'}}
            data-dot-accept-types={acceptTypes}
            data-dot-object="container"
            data-dot-inode={inode}
            data-dot-identifier={identifier}
            data-dot-uuid={uuid}
            data-max-contentlets={maxContentlets}
            data-dot-can-add="CONTENT,FORM,WIDGET"
        >
            {children}
        </div>
    )
}

const DotcmsContent = ({data}) => {
    console.log(data.page.canEdit)
    return (
        <div>
            {data.layout.body.rows.map(({columns}, i) => (
                <Grid templateColumns="repeat(12, 1fr)" gap={4} key={`row-${i}`}>
                    {columns.map(({leftOffset, width, containers}, k) => (
                        <GridItem
                            colStart={leftOffset}
                            colEnd={leftOffset + width}
                            key={`col-${k}`}
                        >
                            {containers.map((containerFull, l) => {
                                const {identifier, uuid} = containerFull
                                const acceptTypes = data.containers[identifier].containerStructures
                                    .map(({contentTypeVar}) => contentTypeVar)
                                    .join(',')

                                const container = {
                                    ...data.containers[identifier].container,
                                    uuid,
                                    acceptTypes
                                }
                                const contentlets =
                                    data.containers[identifier].contentlets[`uuid-${uuid}`]

                                return (
                                    <Box
                                        w="100%"
                                        p={4}
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        key={`container-${l}`}
                                    >
                                        <ContainerWrapper {...container}>
                                            {contentlets.map((contentlet, m) => {
                                                return (
                                                    <Contentlet
                                                        data={{
                                                            ...contentlet,
                                                            canEdit: data.page.canEdit
                                                        }}
                                                        key={`contentlet-${m}`}
                                                    />
                                                )
                                            })}
                                        </ContainerWrapper>
                                    </Box>
                                )
                            })}
                        </GridItem>
                    ))}
                </Grid>
            ))}
        </div>
    )
}

DotcmsContent.propTypes = {
    data: PropTypes.object
}

export default DotcmsContent
