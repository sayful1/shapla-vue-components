<template>
    <div class="shapla-signature-canvas">
        <canvas id="shapla-signature-canvas__canvas" class="shapla-signature-canvas__canvas" width="298" height="150"/>
        <div class="shapla-signature-canvas__actions">
            <shapla-button class="shapla-signature-canvas__clear">{{clearButtonText}}</shapla-button>
            <shapla-button theme="secondary" class="shapla-signature-canvas__create">{{createButtonText}}</shapla-button>
        </div>
    </div>
</template>

<script>
    import shaplaButton from "shapla-button";

    export default {
        name: "signatureCanvas",
        components: {shaplaButton},
        props: {
            clearButtonText: {type: String, default: 'Clear'},
            createButtonText: {type: String, default: 'Create'},
        },
        mounted() {
            let canvas = this.$el.querySelector('#shapla-signature-canvas__canvas');
            let clearButton = this.$el.querySelector('.shapla-signature-canvas__clear');
            let createSign = this.$el.querySelector('.shapla-signature-canvas__create');

            // Set up the canvas
            let ctx = canvas.getContext("2d");
            ctx.strokeStyle = "#222222";
            ctx.lineWith = 2;

            clearButton.addEventListener("click", () => {
                if (confirm('Are you sure?')) {
                    clearCanvas();
                    this.$emit('clear');
                }
            }, false);

            createSign.addEventListener("click", () => {
                let dataUrl = canvas.toDataURL();
                this.$emit('save', dataUrl);
            }, false);

            // Set up mouse events for drawing
            let drawing = false;
            let mousePos = {x: 0, y: 0};
            let lastPos = mousePos;

            canvas.addEventListener("mousedown", (event) => {
                drawing = true;
                lastPos = getMousePos(canvas, event);
            }, false);

            canvas.addEventListener("mouseup", () => {
                drawing = false;
            }, false);

            canvas.addEventListener("mousemove", (e) => {
                mousePos = getMousePos(canvas, e);
            }, false);

            // Set up touch events for mobile, etc
            canvas.addEventListener("touchstart", (e) => {
                mousePos = getTouchPos(canvas, e);
                let touch = e.touches[0];
                let mouseEvent = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            }, false);

            canvas.addEventListener("touchend", () => {
                let mouseEvent = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(mouseEvent);
            }, false);

            canvas.addEventListener("touchmove", (e) => {
                let touch = e.touches[0];
                let mouseEvent = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            }, false);

            // Prevent scrolling when touching the canvas
            document.body.addEventListener("touchstart", (e) => {
                if (e.target === canvas) {
                    e.preventDefault();
                }
            }, {capture: false, passive: false});

            document.body.addEventListener("touchend", (e) => {
                if (e.target === canvas) {
                    e.preventDefault();
                }
            }, {capture: false, passive: false});

            document.body.addEventListener("touchmove", (e) => {
                if (e.target === canvas) {
                    e.preventDefault();
                }
            }, {capture: false, passive: false});

            // Get the position of the mouse relative to the canvas
            function getMousePos(canvasDom, mouseEvent) {
                let rect = canvasDom.getBoundingClientRect();
                return {
                    x: mouseEvent.clientX - rect.left,
                    y: mouseEvent.clientY - rect.top
                };
            }

            // Get the position of a touch relative to the canvas
            function getTouchPos(canvasDom, touchEvent) {
                let rect = canvasDom.getBoundingClientRect();
                return {
                    x: touchEvent.touches[0].clientX - rect.left,
                    y: touchEvent.touches[0].clientY - rect.top
                };
            }

            // Draw to the canvas
            function renderCanvas() {
                if (drawing) {
                    ctx.moveTo(lastPos.x, lastPos.y);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();
                    lastPos = mousePos;
                }
            }

            function clearCanvas() {
                let currentCanvasWidth = canvas.width;
                canvas.width = currentCanvasWidth;

                return currentCanvasWidth;
            }

            // Allow for animation
            (function drawLoop() {
                window.requestAnimationFrame(drawLoop);
                renderCanvas();
            })();
        }
    }
</script>

<style lang="scss">
    .shapla-signature-canvas {
        max-width: 300px;

        &__canvas {
            border: 1px solid rgba(#000, 0.2);
        }

        &__actions {
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;

            button {
                flex-grow: 1;

                &:not(:last-child) {
                    margin-right: .5rem;
                }
            }
        }
    }
</style>
