/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, useMediaQuery, makeStyles, Box, IconButton, Button, Collapse } from '@mui/material'
import MenuIcon from '@mui/ic'
import { useLocation } from 'react-router-dom'
import { matchPath } from 'react-router'
import { makeStyles } from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon, KeyboardArrowRight as KeyboardArrowRightIcon } from '@material-ui/icons'
import _ from 'lodash'
import uiReducer from '@redux/reducers/uiConfig'
import { SELECTOR_UI_EXPAND_SIDEBAR } from '@redux/selectors/uiConfig'

import Link from '../components/CustomLink'
import { getUrlFile } from '../modules/fileHandler'
import { getCategoryParents, getCategoriesTree } from '../redux/actions/categories'

const useStyles = makeStyles((theme) => ({
    root: {
        borderRight: ({ small }) => (!small ? '1px solid rgba(0, 0, 0, 0.12)' : '0'),
    },
    menuList: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        '&.subMenu': {
            marginLeft: 45,
            fontSize: 12,
            fontWeight: 'normal',
        },
    },
    menuListItem: {
        minHeight: 50,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
        '&.small-active': {
            background: theme.palette.grey.main,
            marginLeft: -theme.spacing(2),
            marginRight: -theme.spacing(3),
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            position: 'relative',
            '&::before': {
                content: "''",
                top: '-20px',
                right: 0,
                width: 30,
                height: 20,
                position: 'absolute',
                background: '#fff',
                borderBottomRightRadius: 20,
                boxShadow: `9px 3px 0px 3px ${theme.palette.grey.main}`,
            },
            '&::after': {
                content: "''",
                bottom: '-21px',
                right: -1,
                width: 30,
                height: 20,
                position: 'absolute',
                background: '#fff',
                borderTopRightRadius: 20,
                boxShadow: `7px -8px 0px 3px ${theme.palette.grey.main}`,
            },
        },
    },
    menuLink: {
        display: 'flex',
        alignItems: 'center',
        transition: '.14s all linear',
    },
    iconArrow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        cursor: 'pointer',
    },
}))

const RenderSubMenu = ({ level, category, custom, paths }) => {
    const [open, setOpen] = useState(false)

    const { value: expandSidebar } = useSelector(SELECTOR_UI_EXPAND_SIDEBAR)

    const location = useLocation()
    const dispatch = useDispatch()

    const sub = !!category?.children?.length

    const screen950 = useMediaQuery('(max-width:950px)')

    const matchUrl = (p1, p2) => !!matchPath(p1, { path: p2, exact: true })
    const isActive = (paths = []) => !!paths.find((x) => matchUrl(location.pathname, x))
    const getActiveRoutes = () =>
        custom
            ? paths
            : [
                  `/${category.slug}`,
                  `/${category.slug}/quick-view-:p_id-:p_name`,
                  ...(sub ? _.flatten(category.children.map((x) => [`/${x.slug}`, `/${x.slug}/quick-view-:p_id-:p_name`])) : []),
              ]

    const small = !screen950 && !expandSidebar
    const iconSize = small ? 35 : 28

    function autoClose() {
        if (screen950) dispatch(uiReducer.Creators.setUiValue('expandSidebar', { value: !expandSidebar }))
    }

    useEffect(() => {
        setOpen(isActive(getActiveRoutes()))
    }, [location.pathname])

    const classes = useStyles()

    return (
        <Box className={clsx(classes.menuListItem, small && open ? 'small-active' : '')} component="li">
            <Box alignItems="center" display="flex" justifyContent={small ? 'center' : 'space-between'}>
                <Link active={open} className={classes.menuLink} to={`/${category.slug}`} onClick={autoClose}>
                    {category.path_icon && (
                        <Box
                            alignItems={'center'}
                            display={'flex'}
                            height={iconSize}
                            justifyContent={'center'}
                            mr={small ? 0 : 2}
                            width={iconSize}
                        >
                            <img
                                alt={`${category.name}`}
                                height={iconSize}
                                src={custom ? category.path_icon : `${getUrlFile(category.path_icon)}`}
                                width={iconSize}
                            />
                        </Box>
                    )}
                    {!small && <Box fontSize={14}>{category.name}</Box>}
                </Link>
                {sub && !small && (
                    <Button className={classes.iconArrow} onClick={() => setOpen(!open)}>
                        {open ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                    </Button>
                )}
            </Box>
            {sub && !small && (
                <Collapse className={clsx(classes.menuList, 'subMenu')} component="ul" in={open}>
                    {category.children.map((x, i) => (
                        <RenderSubMenu key={`${x.slug}_level_${level}_key_${i}`} category={x} level={level + 1} />
                    ))}
                </Collapse>
            )}
        </Box>
    )
}

SidebarMenu.propTypes = {
    className: PropTypes.string,
}

function SidebarMenu({ className }) {
    const { value: expandSidebar, persistent } = useSelector(SELECTOR_UI_EXPAND_SIDEBAR)
    const categoriesTree = useSelector(SELECTOR_CATEGORIES_TREE)

    const theme = useTheme()
    const dispatch = useDispatch()
    const screen950 = useMediaQuery('(max-width:950px)')
    const isScreenMd = useMediaQuery('(max-width:768px)')

    const small = !screen950 && !expandSidebar

    const classes = useStyles({ small })

    function _getCategoryData() {
        dispatch(getCategoryParents())
        dispatch(getCategoriesTree())
    }

    useEffect(() => {
        _getCategoryData()
    }, [])

    // abierto && no-persistente = true & true
    // abierto && persistente = false & false

    return (
        <div className={clsx(className, classes.root)}>
            <Box alignItems={'center'} display={'flex'} justifyContent={small ? 'center' : 'space-between'} mb={3}>
                <IconButton
                    onClick={() => {
                        dispatch(
                            uiReducer.Creators.setUiValue('expandSidebar', {
                                value: isScreenMd ? !expandSidebar : expandSidebar && !persistent,
                                persistent: isScreenMd ? true : expandSidebar && !persistent,
                            }),
                        )
                    }}
                >
                    <MenuIcon style={{ fontSize: 32, color: theme.palette.primary.main }} />
                </IconButton>
                {!small && (
                    <Link to="/">
                        <img alt="logotype" src="/images/logotype_viva@2x.png" width={100} />
                    </Link>
                )}
            </Box>
            <Box>
                <Box className={classes.menuList} component="ul">
                    {categoriesTree.map((it, i) => (
                        <RenderSubMenu key={`menu_item_key_${i}`} category={it} level={0} />
                    ))}
                    <RenderSubMenu
                        custom
                        category={{ name: 'Catálogos', slug: 'catalogos', path_icon: '/icons/magazine.svg' }}
                        level={0}
                        paths={['/catalogos']}
                    />
                    <RenderSubMenu
                        custom
                        category={{ name: 'Blog', slug: 'blog', path_icon: '/icons/blog.svg' }}
                        level={0}
                        paths={['/blog', '/blog/:id']}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default SidebarMenu
