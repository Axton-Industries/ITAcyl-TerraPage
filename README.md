# ITAcyl-TerraPage

Landing page de la aplicación de Terra.

## Estructura

- `index.html` — landing estática (sin build step).
- `styles.css` / `main.js` — estilos y micro-interacciones.
- `assets/` — logos de Terra e ITACyL.
- `docs/` — documentación técnica en MkDocs Material.

## Servir la landing en local

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Documentación (MkDocs Material)

La documentación vive en `docs/` y se compila con MkDocs Material.

```bash
pip install -r requirements-docs.txt
mkdocs serve -f docs/mkdocs.yml        # http://127.0.0.1:8001
mkdocs build -f docs/mkdocs.yml        # genera docs/../site_docs/
```