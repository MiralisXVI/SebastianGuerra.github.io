import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 29.99,
    description: 'This is a test product description',
    category: 'test-category',
    image: 'https://via.placeholder.com/200',
    rating: 4.5,
    reviews: 100
  }

  it('renders product with correct data', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
        isFavorite: false
      }
    })

    expect(wrapper.text()).toContain('Test Product')
    expect(wrapper.text()).toContain('29.99')
    expect(wrapper.text()).toContain('test-category')
  })

  it('emits view-details event when details button is clicked', async () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
        isFavorite: false
      }
    })

    const detailsButton = wrapper.find('button')
    await detailsButton.trigger('click')

    expect(wrapper.emitted('view-details')).toBeTruthy()
    expect(wrapper.emitted('view-details')[0]).toEqual([mockProduct.id])
  })

  it('emits toggle-favorite event when favorite button is clicked', async () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
        isFavorite: false
      }
    })

    const buttons = wrapper.findAll('button')
    const favoriteButton = buttons[0] // First button is favorite
    await favoriteButton.trigger('click')

    expect(wrapper.emitted('toggle-favorite')).toBeTruthy()
    expect(wrapper.emitted('toggle-favorite')[0]).toEqual([mockProduct.id])
  })

  it('truncates long descriptions', () => {
    const longProduct = {
      ...mockProduct,
      description: 'A'.repeat(150)
    }

    const wrapper = mount(ProductCard, {
      props: {
        product: longProduct,
        isFavorite: false
      }
    })

    const description = wrapper.text()
    expect(description.length).toBeLessThan(longProduct.description.length)
    expect(description).toContain('...')
  })

  it('shows heart icon when isFavorite is true', async () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct,
        isFavorite: true
      }
    })

    expect(wrapper.classes()).toContain('elevation-4')
  })
})
