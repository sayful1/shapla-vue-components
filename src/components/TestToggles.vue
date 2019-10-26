<template>
    <div>
        <toggles>
            <toggle name="Toggle One" :selected="true">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id.
            </toggle>

            <toggle name="Toggle right" iconPosition="right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id.
            </toggle>

            <toggle name="Toggle Two">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam at et itaque magnam nulla officiis
                perferendis ratione velit, veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda at autem beatae
                consectetur consequatur culpa debitis dolorem doloremque eligendi eum ex expedita fugiat inventore iste
                iusto laborum laudantium natus officiis, pariatur placeat porro quam quisquam, repudiandae sit suscipit
                ut. Aliquid beatae culpa doloribus dolorum ea earum et exercitationem, hic, incidunt ipsum laborum minus
                necessitatibus officia quasi rerum sapiente tenetur unde. Accusamus adipisci aliquid animi asperiores
                et, impedit laborum maiores, molestias natus nisi quae quo repudiandae velit! Dignissimos ex impedit
                laborum nisi qui suscipit temporibus voluptas? Ipsam, mollitia, natus? Assumenda dignissimos expedita
                ipsum laboriosam molestiae quos recusandae, soluta vel?
                <toggle name="Nested Toggle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem dolorum explicabo ipsam,
                    molestiae nesciunt. Alias atque corporis cum earum exercitationem facilis harum illum itaque
                    necessitatibus nihil nobis numquam odio officia pariatur praesentium quam quas ratione repudiandae
                    rerum, sunt suscipit unde vel voluptate, voluptates voluptatibus. Accusamus amet animi consequuntur
                    corporis distinctio ea eius hic illo laborum, maxime mollitia nobis non odit perferendis quae quasi
                    qui soluta vel. Asperiores aspernatur blanditiis dolore est excepturi exercitationem labore nihil,
                    quidem quo sapiente soluta tenetur ullam. Aliquam autem dignissimos dolor, eius facere illo impedit
                    iure laboriosam magni maiores nesciunt optio porro quibusdam velit voluptates.
                </toggle>
            </toggle>
        </toggles>
    </div>
</template>

<script>
    import Toggles from "../../shapla-toggles/src/toggles";
    import Toggle from "../../shapla-toggles/src/toggle";

    export default {
        name: "TestToggles",
        components: {Toggle, Toggles}
    }
</script>

<style scoped>

</style>