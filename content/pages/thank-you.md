---
title: Thank You
sections:
  - section_id: Registro
    title: Formulario de registro
    subtitle: lorem-ipsum
    title_align: left
    content_align: center
    form_position: top
    form_width: sixty
    form_layout: stacked
    enable_card: false
    form_id: Registro
    form_action: lorem-ipsum
    form_fields:
      - input_type: text
        name: Nombre
        label: Nombre
        default_value: Nombre
        options: []
        is_required: true
      - input_type: text
        name: Apellidos
        label: Apellidos
        default_value: Apellidos
        options:
          - lorem-ipsum
        is_required: true
      - input_type: select
        name: Tipo de documento
        label: Tipo de documento
        default_value: Seleccione su tipo de documento
        options:
          - Cédula de ciudadanía
          - Pasaporte
          - Cédula de extrajería
        is_required: true
      - input_type: number
        name: Número de identificación
        label: celular
        default_value: Número de teléfono celular
        options: []
        is_required: false
    submit_label: Registrarse
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    has_border: false
    background_color: none
    background_image_opacity: 0
    background_image_size: cover
    background_image_position: center center
    background_image_repeat: no-repeat
    type: form_section
layout: advanced
---
