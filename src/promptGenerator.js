const prompts = {
  minimalista: ({ precio, direccion, tipoPropiedad, descripcion, colorPrincipal, colorSecundario1, colorSecundario2 }) =>
`Diseña un flyer inmobiliario profesional.

PALETA DE COLORES (usar exclusivamente):
- Color principal: ${colorPrincipal}
- Color secundario 1: ${colorSecundario1}
- Color secundario 2: ${colorSecundario2}

ESTILO VISUAL:
Minimalismo tech con glassmorphism.

COMPOSICIÓN:
- Imagen full bleed con perspectiva arquitectónica
- UI flotante sobre la imagen

UBICACIÓN DE CONTENIDO:
- ${tipoPropiedad} → pequeño, arriba
- ${direccion} → debajo como subtítulo
- ${precio} → centro en contenedor glass (pill con blur)
- ${descripcion} → debajo del precio
- CTA → botón inferior tipo app

DETALLES:
- Contenedor del precio con blur + transparencia + sombra
- CTA con bordes redondeados

ATMÓSFERA:
Tecnológica, aspiracional`,

  moderno: ({ precio, direccion, tipoPropiedad, descripcion, colorPrincipal, colorSecundario1, colorSecundario2 }) =>
`Diseña un flyer inmobiliario profesional.

PALETA DE COLORES (usar exclusivamente):
- Color principal: ${colorPrincipal}
- Color secundario 1: ${colorSecundario1}
- Color secundario 2: ${colorSecundario2}

ESTILO VISUAL:
Geométrico, bold, dinámico.

COMPOSICIÓN:
- Imagen full bleed
- Shapes geométricos superpuestos
- Cortes diagonales

UBICACIÓN DE CONTENIDO:
- ${precio} → dentro de shape dominante
- ${tipoPropiedad} → como etiqueta pequeña
- ${direccion} → alineada a un borde o línea
- ${descripcion} → bloque corto dentro de grid
- CTA → integrado en banda o bloque

TIPOGRAFÍA:
- Sans-serif bold
- Mayúsculas

ATMÓSFERA:
Energía, innovación`,

  lujo: ({ precio, direccion, tipoPropiedad, descripcion, colorPrincipal, colorSecundario1, colorSecundario2 }) =>
`Diseña un flyer inmobiliario profesional.

PALETA DE COLORES (usar exclusivamente):
- Color principal: ${colorPrincipal}
- Color secundario 1: ${colorSecundario1}
- Color secundario 2: ${colorSecundario2}

ESTILO VISUAL:
Premium, editorial.

COMPOSICIÓN:
- Imagen full bleed
- Mucho aire
- Alineación precisa

UBICACIÓN DE CONTENIDO:
- ${tipoPropiedad} → muy pequeño, arriba
- ${direccion} → elegante, debajo
- ${precio} → integrado con discreción (no agresivo)
- ${descripcion} → líneas finas separadas
- CTA → pequeño, no dominante

TIPOGRAFÍA:
- Serif o sans premium
- Tracking amplio

ATMÓSFERA:
Exclusividad, sofisticación`,

  rustico: ({ precio, direccion, tipoPropiedad, descripcion, colorPrincipal, colorSecundario1, colorSecundario2 }) =>
`Diseña un flyer inmobiliario profesional.

PALETA DE COLORES (usar exclusivamente):
- Color principal: ${colorPrincipal}
- Color secundario 1: ${colorSecundario1}
- Color secundario 2: ${colorSecundario2}

ESTILO VISUAL:
Natural, cálido, orgánico.

COMPOSICIÓN:
- Imagen full bleed con luz natural
- Elementos suaves
- Texturas sutiles

UBICACIÓN DE CONTENIDO:
- ${tipoPropiedad} → arriba, estilo etiqueta
- ${direccion} → cercano, visible
- ${precio} → integrado suavemente
- ${descripcion} → texto principal emocional
- CTA → amigable

TIPOGRAFÍA:
- Serif o handwritten sutil

ATMÓSFERA:
Hogar, cercanía`,

  elegante: ({ precio, direccion, tipoPropiedad, descripcion, colorPrincipal, colorSecundario1, colorSecundario2 }) =>
`Diseña un flyer inmobiliario profesional.

PALETA DE COLORES (usar exclusivamente):
- Color principal: ${colorPrincipal}
- Color secundario 1: ${colorSecundario1}
- Color secundario 2: ${colorSecundario2}

ESTILO VISUAL:
Clásico, refinado, equilibrado.

COMPOSICIÓN:
- Imagen full bleed
- Layout simétrico o en grilla

UBICACIÓN DE CONTENIDO:
- ${tipoPropiedad} → arriba
- ${direccion} → debajo
- ${precio} → destacado en zona media
- ${descripcion} → bloque ordenado
- CTA → inferior, discreto

TIPOGRAFÍA:
- Serif o sans sofisticada

ATMÓSFERA:
Confianza, profesionalismo`,
}

export function generatePrompts(data) {
  const { estilo } = data
  return prompts[estilo](data)
}
