import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GameCust | Новости из мира игр',
    short_name: 'GameCust',
    description: 'Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}