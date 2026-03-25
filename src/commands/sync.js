const fs = require("fs");
const path = require("path");
const {
  loadPipelineConfig,
  resolveSpecPaths,
  ensureSpecsLayout,
  writeStepExtraSkillsMd,
  ensureTeamConfigYaml,
} = require("../lib/specPaths");

/**
 * Asegura carpetas bajo docs_root, specs/config.yaml y el índice de skills extra del equipo.
 */
const sync = async () => {
  const projectRoot = process.cwd();
  const config = loadPipelineConfig(projectRoot);
  const paths = resolveSpecPaths(projectRoot, config);

  const created = ensureSpecsLayout(paths);
  for (const d of created) {
    console.log(`📁 Creada: ${path.relative(projectRoot, d)}`);
  }

  const teamCfg = ensureTeamConfigYaml(projectRoot, paths);
  if (teamCfg) {
    console.log(`✨ Creado: ${path.relative(projectRoot, teamCfg)}`);
  }

  const skillsMd = writeStepExtraSkillsMd(projectRoot, paths, config);
  console.log(`✔ Actualizado: ${path.relative(projectRoot, skillsMd)}`);
  console.log("\n✅ Sync completado.");
};

module.exports = sync;
