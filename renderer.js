window.addEventListener('DOMContentLoaded', () => {
  const btnVersion = document.getElementById('btn-version')
  const versionResult = document.getElementById('version-result')
  const btnPath = document.getElementById('btn-path')
  const pathResult = document.getElementById('path-result')
  const btnOpen = document.getElementById('btn-open')

  btnVersion?.addEventListener('click', async () => {
    const v = await window.api.getVersion()
    versionResult.textContent = `v${v}`
  })

  btnPath?.addEventListener('click', async () => {
    const p = await window.api.getPath('userData')
    pathResult.textContent = p
  })

  btnOpen?.addEventListener('click', () => {
    window.api.openExternal('https://www.electronjs.org')
  })
})


