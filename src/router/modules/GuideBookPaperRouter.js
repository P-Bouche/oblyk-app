const GuideBookPaperView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperView" */ '@/views/GuideBookPaperView')
const GuideBookPaperInfoView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperInfoView" */ '@/views/guideBookPapers/GuideBookPaperInfoView')
const GuideBookPaperCragsView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperCragsView" */ '@/views/guideBookPapers/GuideBookPaperCragsView')
const GuideBookPaperCoverView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperCoverView" */ '@/views/guideBookPapers/actions/GuideBookPaperCoverView')
const GuideBookPaperPhotosView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperPhotosView" */ '@/views/guideBookPapers/GuideBookPaperPhotosView')
const GuideBookPaperLinkView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperLinkView" */ '@/views/guideBookPapers/GuideBookPaperLinkView')
const GuideBookPaperMapView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperMapView" */ '@/views/guideBookPapers/GuideBookPaperMapView')
const GuideBookPaperEditView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperEditView" */ '@/views/guideBookPapers/actions/GuideBookPaperEditView')
const GuideBookPaperNewView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperNewView" */ '@/views/guideBookPapers/actions/GuideBookPaperNewView')
const GuideBookPaperFindView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperNewView" */ '@/views/GuideBookPaperFindView')
const RecommendedGuideBooksView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperNewView" */ '@/views/RecommendedGuideBooksView')
const NewGuideBooksVersionView = () => import(/* webpackChunkName: "GuideBookPaperRouter-GuideBookPaperNewView" */ '@/views/NewGuideBooksVersionView')

export default [
  {
    path: '/guide-book-papers/find',
    component: GuideBookPaperFindView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/guide-book-papers/new-versions',
    component: NewGuideBooksVersionView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/guide-book-papers/recommended',
    component: RecommendedGuideBooksView
  },
  {
    path: '/guide-book-papers/new',
    component: GuideBookPaperNewView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/guide-book-papers/:guideBookPaperId/:guideBookPaperSlug/edit',
    component: GuideBookPaperEditView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/guide-book-papers/:guideBookPaperId/:guideBookPaperSlug/cover',
    component: GuideBookPaperCoverView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/guide-book-papers/:guideBookPaperId/:guideBookPaperSlug',
    component: GuideBookPaperView,
    props: true,
    meta: {
      noPaddingTop: false
    },
    children: [
      {
        path: '',
        component: GuideBookPaperInfoView,
        meta: {
          noPaddingTop: false
        }
      },
      {
        path: 'crags',
        component: GuideBookPaperCragsView,
        meta: {
          noPaddingTop: false
        }
      },
      {
        path: 'photos',
        component: GuideBookPaperPhotosView,
        meta: {
          noPaddingTop: false
        }
      },
      {
        path: 'links',
        component: GuideBookPaperLinkView,
        meta: {
          noPaddingTop: false
        }
      },
      {
        path: 'map',
        component: GuideBookPaperMapView,
        meta: {
          noPaddingTop: false
        }
      }
    ]
  }
]
