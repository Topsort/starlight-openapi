import { expect, test } from './test'

test.fixme('lists operations grouped by tag', async ({ sidebarPage }) => {
  await sidebarPage.goto()

  const items = await sidebarPage.getSidebarGroupItems('Giphy')

  expect(items).toMatchObject([
    { name: 'Overview' },
    {
      collapsed: true,
      label: 'gifs',
      items: [
        { name: 'Get GIFs by ID' },
        { name: 'Random GIF' },
        { name: 'Search GIFs' },
        { name: 'Translate phrase to GIF' },
        { name: 'Trending GIFs' },
        { name: 'Get GIF by Id' },
      ],
    },
    {
      collapsed: true,
      label: 'stickers',
      items: [
        { name: 'Random Sticker' },
        { name: 'Search Stickers' },
        { name: 'Translate phrase to Sticker' },
        { name: 'Trending Stickers' },
      ],
    },
  ])
})

test.fixme('uses a fallback group for untagged operations', async ({ sidebarPage }) => {
  await sidebarPage.goto()

  const items = await sidebarPage.getSidebarGroupItems('Petstore')

  expect(items).toMatchObject([
    { name: 'Overview' },
    {
      collapsed: false,
      label: 'Operations',
      items: [{ name: 'findPets' }, { name: 'addPet' }, { name: 'find pet by id' }, { name: 'deletePet' }],
    },
    {
      collapsed: false,
      label: 'Webhooks',
      items: [{ name: 'newPet' }],
    },
  ])
})

test.fixme('respects tags order', async ({ sidebarPage }) => {
  await sidebarPage.goto()

  const items = await sidebarPage.getSidebarGroupItems('1Password Connect')

  expect(items).toMatchObject([
    { name: 'Overview' },
    { collapsed: true, label: 'Items' },
    { collapsed: true, label: 'Vaults' },
    { collapsed: true, label: 'Activity' },
    { collapsed: true, label: 'Health' },
    { collapsed: true, label: 'Metrics' },
    { collapsed: true, label: 'Files' },
  ])
})
