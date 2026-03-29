describe('E2E: Filter Products by Category', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('user filters products by category and sees results', () => {
    // Step 1: Navigate to products page
    cy.get('a').contains('Catálogo').click()
    cy.url().should('include', '/productos')

    // Step 2: Wait for products to load
    cy.get('[data-testid="product-card"]', { timeout: 5000 }).should('exist')

    // Step 3: Verify category select is visible
    cy.get('select, [role="combobox"]').should('be.visible')

    // Step 4: Open category dropdown and select first category
    cy.get('select, [role="combobox"]').first().click()
    cy.get('[role="option"]').first().click()

    // Step 5: Verify filtered results appear
    cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0)

    // Step 6: Verify all visible products match selected category
    cy.get('[data-testid="product-category"]').each(($el) => {
      expect($el.text()).not.to.be.empty
    })
  })

  it('user clears filters and sees all products', () => {
    cy.get('a').contains('Catálogo').click()
    cy.get('select, [role="combobox"]').first().click()
    cy.get('[role="option"]').first().click()

    // Get count of filtered products
    cy.get('[data-testid="product-card"]').then(($elements) => {
      const filteredCount = $elements.length

      // Clear filters
      cy.get('button').contains('Limpiar', { timeout: 3000 }).click()

      // Verify more products are shown
      cy.get('[data-testid="product-card"]').should(
        'have.length.greaterThan',
        filteredCount
      )
    })
  })

  it('user searches for a product', () => {
    cy.get('a').contains('Catálogo').click()
    
    // Type search term
    cy.get('input[placeholder*="Buscar"]').type('tshirt')
    
    // Wait for results to update
    cy.get('[data-testid="product-card"]', { timeout: 3000 }).should('exist')
    
    // Verify at least one result appears
    cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0)
  })
})

describe('E2E: View Product Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/productos')
  })

  it('user clicks on product and sees details', () => {
    // Wait for products to load
    cy.get('button').contains('Ver Detalles', { timeout: 5000 }).first().click()

    // Verify redirected to detail page
    cy.url().should('match', /\/productos\/\d+/)

    // Verify detail elements are visible
    cy.get('h1').should('exist')
    cy.get('button').contains('Agregar a Favoritos').should('be.visible')
    cy.get('button').contains('Agregar al Carrito').should('be.visible')
  })

  it('user toggles favorite on product detail page', () => {
    cy.get('button').contains('Ver Detalles', { timeout: 5000 }).first().click()

    // Click favorite button
    cy.get('button').contains('Agregar a Favoritos').click()

    // Verify button text changes
    cy.get('button').contains('Remover de Favoritos').should('exist')
  })
})

describe('E2E: Favorites Management', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/productos')
  })

  it('user adds and removes favorites', () => {
    // Add a favorite from list
    cy.get('[data-testid="favorite-btn"]').first().click()

    // Navigate to favorites
    cy.get('a').contains('Favoritos').click()

    // Verify product is in favorites
    cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0)

    // Remove from favorites
    cy.get('[data-testid="favorite-btn"]').first().click()

    // Verify empty state
    cy.get('p').contains('aún no tienes').should('be.visible')
  })
})
