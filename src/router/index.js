import { createRouter, createWebHistory } from 'vue-router'
import {
  ArticleWithBreakout,
  BasicCalendar,
  EvenlyDistributedFitAsNeeded,
  HolyGrailResponsive,
  MonopolyBoard,
  TwoColumnHeaderFooter,
} from '@/views'
import AutoFillVsAutoFit from '@/views/AutoFillVsAutoFit.vue'
import OverlappingRatioBased from '@/views/OverlappingRatioBased.vue'

export const routes = [
  {
    path: '/article-with-breakout',
    name: 'Article with breakout',
    component: ArticleWithBreakout,
  },
  {
    path: '/basic-calendar',
    name: 'Basic Calendar',
    component: BasicCalendar,
  },
  {
    path: '/evenly-distributed-fit-as-needed',
    name: 'Evenly Distributed Fit As Needed',
    component: EvenlyDistributedFitAsNeeded,
  },
  {
    path: '/holy-grail-responsive',
    name: 'Holy Grail Responsive',
    component: HolyGrailResponsive,
  },
  {
    path: '/monopoly-board',
    name: 'Monopoly Board',
    component: MonopolyBoard,
  },
  {
    path: '/two-column-header-footer',
    name: 'Two Column Header Footer',
    component: TwoColumnHeaderFooter,
  },
  {
    path: '/auto-fill-vs-auto-fit',
    name: 'auto-fill vs auto-fit',
    component: AutoFillVsAutoFit,
  },
  {
    path: '/overlapping',
    name: 'Overlapping',
    component: OverlappingRatioBased,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
