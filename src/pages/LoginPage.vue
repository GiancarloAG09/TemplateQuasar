<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout>
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6 text-center">Iniciar Sesión</div>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset">
            <q-input
              v-model="email"
              filled
              type="email"
              label="Correo Electrónico"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor ingrese su correo',
              ]"
            />

            <q-input
              v-model="password"
              filled
              type="password"
              label="Contraseña"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Por favor ingrese su contraseña',
              ]"
              class="q-mt-md"
            />

            <div class="q-mt-md">
              <q-btn
                label="Iniciar Sesión"
                type="submit"
                color="primary"
                class="full-width"
                to="/dashboard"
              />
              <q-btn
                label="Restablecer"
                type="reset"
                color="secondary"
                flat
                class="q-mt-sm full-width"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: "LoginPage",
});
import { ref } from "vue";

const email = ref("");
const password = ref("");

function onSubmit() {
  // Aquí iría la lógica para enviar los datos al backend y autenticar al usuario
  console.log("Email:", email.value);
  console.log("Password:", password.value);
}

function onReset() {
  email.value = "";
  password.value = "";
}
</script>
