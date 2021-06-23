<template>
  <div class="canvas-wrap">
    <canvas class="one"></canvas>
    <canvas class="two"></canvas>
  </div>
</template>

<script>
import * as dat from 'dat.gui'

export default {
  mounted() {
    const { PI, sin, cos, min, abs } = Math

    let size

    size = min(innerHeight, innerWidth)
    const canvases = Array.from(document.querySelectorAll('canvas'))
    const ctxes = []
    canvases.forEach((canvas) => {
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      ctxes.push(ctx)
    })
    const [base, cover] = ctxes

    base.translate(size / 2, 0)
    cover.translate(size / 2, 0)

    const d = 64

    class Hyperboloid {
      constructor() {
        this.theta = PI / 1.5
        this.trail = false
        this.r = PI
        this.d = d

        this.draw = this.draw.bind(this)
        this.draw()
      }

      clear() {
        ctxes.forEach((ctx) => {
          ctx.save()
          ctx.setTransform(1, 0, 0, 1, 0, 0)
          ctx.clearRect(0, 0, size, size)
          ctx.restore()
        })
      }

      replay() {
        this.clear()
        this.r = PI
        this.d = d
      }

      draw() {
        if (!this.trail) {
          this.clear()
        }

        let i = 0
        do {
          // const color = `hsl(${0},0%,30%`
          const color = `hsl(${360},100%,100%)`
          base.strokeStyle = color
          cover.strokeStyle = color
          base.beginPath()
          cover.beginPath()

          const alpha = i * 2 * PI
          const ca = (size / 2) * cos(alpha + this.r)
          const sa = (size / 2) * sin(alpha + this.r)
          const cb = (size / 2) * cos(alpha + this.r + this.theta)
          const sb = (size / 2) * sin(alpha + this.r + this.theta)
          if (sa >= 0 && sb >= 0) {
            cover.moveTo(ca, 0)
            cover.lineTo(cb, size)
          } else if (sa <= 0 && sb <= 0) {
            base.moveTo(ca, 0)
            base.lineTo(cb, size)
          } else {
            const k = abs(sa / (sa - sb))
            const x = ca + k * (cb - ca)
            const y = k * size
            if (sa > 0) {
              cover.moveTo(ca, 0)
              cover.lineTo(x, y)
              base.moveTo(x, y)
              base.lineTo(cb, size)
            } else {
              base.moveTo(ca, 0)
              base.lineTo(x, y)
              cover.moveTo(x, y)
              cover.lineTo(cb, size)
            }
          }
          base.stroke()
          cover.stroke()

          i += d / this.d
        } while (i < 1)

        // speed control
        this.r -= PI / 1500
        this.r %= 2 * PI
        this.d = d * 32
        requestAnimationFrame(this.draw)
      }
    }

    const _ = new Hyperboloid()
    const gui = new dat.GUI()

    window.onresize = function (event) {
      size = min(window.innerHeight, window.innerWidth)
      _.replay()

      const canvases = Array.from(document.querySelectorAll('canvas'))
      const ctxes = []
      canvases.forEach((canvas) => {
        canvas.width = size
        console.log('canvas.width', canvas.width)
        canvas.height = size
        console.log('canvas.height', canvas.height)
        const ctx = canvas.getContext('2d')
        ctxes.push(ctx)
      })
      const [base, cover] = ctxes

      if (innerWidth < innerHeight) {
        base.setTransform(0, 1, 1, 0, 0, size / 2)
        cover.setTransform(0, 1, 1, 0, 0, size / 2)
      } else {
        base.translate(size / 2, 0)
        cover.translate(size / 2, 0)
      }
    }

    gui.add(_, 'theta', 0, PI).step(0.01)
    gui.add(_, 'trail')
    gui.add(_, 'replay')
  },
}
</script>

<style lang="scss">
.canvas-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 0;
  max-width: 50%;

  @include media-breakpoint-down(sm) {
    position: absolute;
    max-width: 100%;
    overflow: hidden;
  }

  canvas {
    display: block;
    // max-width: 100%;
    // max-height: 100%;
    position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    // margin: auto;
    z-index: 0;
    height: 100vh;

    @include media-breakpoint-up(md) {
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }

    @include media-breakpoint-down(sm) {
      transform: translate(-50%, 0);
      left: 50vw;
      top: 0;
      height: 650px;
    }
    // background-blend-mode: overlay;
    // mix-blend-mode: exclusion;
    // opacity: 0.1;

    &.one {
      opacity: 0.05;
    }
    &.two {
      opacity: 0.2;
    }

    @include media-breakpoint-down(sm) {
      &.one {
        opacity: 0.03;
      }
      &.two {
        opacity: 0.12;
      }
    }
  }
}
</style>
