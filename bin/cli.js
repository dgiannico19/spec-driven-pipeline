#!/usr/bin/env node

const { runAgent } = require("../src/agent/runAgent");

const command = process.argv[2];
const args = process.argv.slice(3);

const run = async () => {
  switch (command) {
    case "init": {
      const init = require("../src/commands/init");
      await init();
      break;
    }

    case "run":
    case "sync": {
      const sync = require("../src/commands/sync");
      await sync();
      break;
    }

    case "agent": {
      const argv = [...args];
      let specPath = process.env.SPEC_VERIFICATION_PATH || null;
      for (let i = 0; i < argv.length; ) {
        if (argv[i] === "--spec" && argv[i + 1]) {
          specPath = argv[i + 1];
          argv.splice(i, 2);
        } else {
          i += 1;
        }
      }
      const prompt = argv.join(" ").trim();
      if (!prompt) {
        console.error(
          "Uso: npx spec-driven-pipeline agent [--spec <ruta-spec>] \"<instrucción>\"\nRequiere ANTHROPIC_API_KEY. SPEC_VERIFICATION_PATH equivale a --spec.",
        );
        process.exitCode = 1;
        return;
      }
      const verbose = process.env.SPEC_AGENT_VERBOSE === "1";
      const { text, raw } = await runAgent({
        userPrompt: prompt,
        verbose,
        specPath,
      });
      if (raw.warning) {
        console.error(`[advertencia] ${raw.warning}`);
      }
      console.log(text || "(sin texto en la última respuesta del asistente)");
      break;
    }

    default:
      console.log(`
Spec-Driven Pipeline 🚀

Commands:
  init     Instala el pipeline, pipeline.config.yaml y el árbol bajo specs/.
  run|sync Crea carpetas si faltan, specs/config.yaml y step-extra-skills.md.
  agent    Agente (fetch + tools + nudge + verificación opcional). ANTHROPIC_API_KEY. --spec o SPEC_VERIFICATION_PATH para forzar verificación de spec.

Uso: npx spec-driven-pipeline <comando>
`);
  }
};

run();
