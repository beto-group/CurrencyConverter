

```datacorejsx
const url = dc.app.vault.getResourcePath(
    dc.app.vault.getAbstractFileByPath("GREX.datacore/components/CurrencyConverter/dist/bundle.es.js")
);

import(url).then(module => {
    module.mount_app(container, dc);
});
```
