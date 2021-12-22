import React from 'react'
import PropTypes from 'prop-types'

import {Grid, GridItem, Box} from '@chakra-ui/react'

import {Contentlet} from './Contentlet'

const DotcmsContent = ({data}) => {
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
                            {containers.map(({identifier, uuid}, l) => {
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
                                        {contentlets.map((contentlet, m) => {
                                            return (
                                                <Contentlet
                                                    data={contentlet}
                                                    key={`contentlet-${m}`}
                                                />
                                            )
                                        })}
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
