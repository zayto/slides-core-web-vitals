import svgLoader from 'vite-svg-loader'
import RemoteAssets from 'vite-plugin-remote-assets'

export default {
  plugins: [
    svgLoader(),
    RemoteAssets(),
  ]
}