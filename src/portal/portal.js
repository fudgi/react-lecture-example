import Card from './card'

const cards = [
  {
    id: 1,
    title: 'Карточка 1',
    preview:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Antu_view-preview.svg/1200px-Antu_view-preview.svg.png',
  },
  {
    id: 2,
    title: 'Карточка 2',
    preview:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Antu_view-preview.svg/1200px-Antu_view-preview.svg.png',
  },
  {
    id: 3,
    title: 'Карточка 3',
    preview:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Antu_view-preview.svg/1200px-Antu_view-preview.svg.png',
  },
  {
    id: 4,
    title: 'Карточка 4',
    preview:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Antu_view-preview.svg/1200px-Antu_view-preview.svg.png',
  },
]

const PortalExample = () => (
  <div className="container">
    {cards.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
)

export default PortalExample
