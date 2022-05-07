import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import { DateParser } from "../../functions/datae-parser"
import { Container, OutlinedLink, StyledLink } from "../../styles/styles"
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { StructuredText } from "react-datocms"
import { Arrow } from "../../resources/arrow"

export default function BlogPosts({ data: { categories, posts, content: { sectionTitle } } }) {

    const [showCount, changeShowCount] = useState(4)

    const [preFiltredArray, changePreFiltredArray] = useState([...posts])
    const [filtredArray, changeFiltredArray] = useState([...posts])
    const [currentFilter, changeCurrentFilter] = useState('all')

    const changeFilter = (filterSlug) => {
        changeCurrentFilter(filterSlug)
        filterSlug === 'all'
            ? changeFiltredArray(preFiltredArray)
            : changeFiltredArray(preFiltredArray.filter(el => el.category.slug === filterSlug))
        document.querySelectorAll('.buttonFilter').forEach(el => el.classList.remove('active'))
        document.getElementById(filterSlug).classList.add('active')
        if (showCount !== 4) {
            changeShowCount(4)
        }
    }

    useEffect(() => {
        if (preFiltredArray.length > 0) {
            document.getElementById('all').classList.add('active')
        }
    }, [])

    return (
        <React.Fragment>
            {preFiltredArray.length > 0
                ? (
                    <Wrapper>
                        <Container>
                            <Flex>
                                <Title><StructuredText data={sectionTitle} /></Title>
                                <Categories>
                                    <Button disabled={currentFilter === 'all'} className="buttonFilter" id='all' onClick={() => { changeFilter('all') }} as='button'>Wszystkie wpisy</Button>
                                    {categories.map(el => {
                                        let isExist = false
                                        preFiltredArray.every(innerEl => {
                                            if (innerEl.category.slug === el.slug) {
                                                isExist = true
                                                return false
                                            }
                                        })
                                        return isExist
                                            ? <Button disabled={currentFilter === el.slug} key={el.name} className="buttonFilter" id={el.slug} onClick={() => { changeFilter(el.slug) }} as='button'>{el.name}</Button>
                                            : null
                                    })}
                                </Categories>
                            </Flex>
                            <AnimateSharedLayout>
                                <AnimatePresence exitBeforeEnter>
                                    <PostsGrid layout>
                                        {filtredArray.map((el, index) => (
                                            <React.Fragment key={el.slug}>
                                                {index < showCount
                                                    ? (
                                                        <Link to={el.slug}>
                                                            <Post
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0 }}
                                                                layout>
                                                                <div className='category'>{el.category.name}</div>
                                                                <div>
                                                                    <Image image={el.coverImage.gatsbyImageData} alt={el.coverImage.alt} />
                                                                    <h3>{el.title}</h3>
                                                                    <p>{el.shortText}</p>
                                                                </div>
                                                                <div className="flex">
                                                                    <span className="next">
                                                                        Czytaj dalej<Arrow />
                                                                    </span>
                                                                    <span className="date">
                                                                        {DateParser(el.date)}
                                                                    </span>
                                                                </div>
                                                            </Post>
                                                        </Link>
                                                    )
                                                    : null
                                                }
                                            </React.Fragment>
                                        ))}
                                    </PostsGrid>
                                </AnimatePresence>
                            </AnimateSharedLayout>
                            {showCount < filtredArray.length
                                ? <ShowMore as='button' onClick={() => { changeShowCount(showCount + 4) }}>Pokaż więcej!</ShowMore>
                                : null
                            }
                        </Container>
                    </Wrapper >
                )
                : <PlaceHolder />
            }
        </React.Fragment>
    )
}

const PlaceHolder = styled.div`
    margin-top: clamp(60px, 16vw, 120px);
`

const Wrapper = styled.section`
    margin-top: clamp(60px, 16vw, 120px);
    margin-bottom: 90px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1023px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Title = styled.div`
    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 100%;
        letter-spacing: -1px;
        color: #203662;
        min-width: fit-content;
    }
`

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1023px){
        margin-top: 24px;
    }
`

const Button = styled(OutlinedLink)`
    margin-right: 16px;

    :last-child{
        margin-right: 0;
    }


    &.active{
        background-color: #0E1F41;
        color: #fff;
        cursor: default;
    }
    
    @media (max-width: 1023px){
        margin-bottom: 24px;
    }
`

const PostsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 48px;
    margin-top: 56px;

    a{
        border-radius: 25px;
    }

    @media (max-width: 1023px){
        margin-top: 32px;
    }

    @media (max-width: 760px) {
        max-width: 500px;
        margin: 32px 0 0 0;
        grid-template-columns: 1fr;
    }
`

const Image = styled(GatsbyImage)`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    height: 340px;

    img{
        transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1), opacity .25s linear !important;
        transform-origin: 50% 50%;

    }

    @media (max-width: 500px) {  
        height: 259px;
    }
`

const Post = styled(motion.div)`
    border: 1px solid #F3F5F8;
    box-sizing: border-box;
    border-radius: 25px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        padding: 32px 32px 8px 32px;
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
        letter-spacing: -0.5px;
        color: #394C71;

    }

    p{
        padding: 0 32px;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #394C71;

    }

    .flex{
        padding: 48px 32px 32px 32px;
        display: flex;
        justify-content: space-between;
       
        .next{
            font-weight: 600;
            font-size: 16px;
            line-height: 170%;
            color: #DB2777;
            display: flex;
            align-items: center;
            svg{
                margin-left: 8px;
                transition: transform .2s cubic-bezier(0.215, 0.610, 0.355, 1);
            }

        }

        .date{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            color: #394C71;

        }
    }

    .category{
        position: absolute;
        font-weight: 600;
        font-size: 16px;
        line-height: 170%;
        text-align: center;
        color: #203662;
        background: #FFFFFF;
        border-radius: 100px;
        padding: 13.5px 33px;
        top: 28px;
        right: 22px;
        z-index: 3;
    }

    &:hover{

        ${Image}{
            img{
                transform: scale(1.04);
            }
        }

        .flex{
            .next{
                svg{
                    transform: translateX(10px);
                }
            }
        }
    }

    @media (max-width: 500px) {
        h3{
            padding: 16px 16px 8px 16px;
        }
        p{
            padding: 0 16px;
        }
        .flex{
            padding: 48px 16px 16px 16px;
        }
    }

    @media (max-width: 320px) {
        .flex{
            flex-direction: column-reverse;

            .date{
                margin-bottom: 8px;
            }
        }
    }


`

const ShowMore = styled(StyledLink)`
    margin: 30px auto 0 auto;
`