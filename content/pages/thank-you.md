---
title: Registro
sections:
  - section_id: Registro
    title: Formulario de registro
    title_align: left
    content_align: center
    form_position: top
    form_width: fourty
    form_layout: stacked
    enable_card: true
    form_id: Registro
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
        name: ID
        label: ID
        default_value: Número de identificación
        options: []
        is_required: true
      - input_type: tel
        name: Tel
        label: Tel
        default_value: Teléfono celular
        options: []
        is_required: true
      - input_type: email
        name: email
        label: email
        default_value: Correo electrónico
        options: []
        is_required: true
    submit_label: Enviar información de registro
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
