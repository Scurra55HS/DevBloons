import Module from '../models/ModuleModel.js';

export const createModule = async (req, res) => {
    const { title, description, content, materials, quiz, topics, sequence } = req.body;
  
    try {
      if (!Array.isArray(topics)) {
        return res.status(400).json({ message: 'Os tópicos devem ser um array.' });
      }

      const newModule = await Module.create({
        title,
        description,
        content,
        materials,
        quiz,
        topics,
        sequence,
      });
      res.status(201).json({ message: 'Módulo criado com sucesso.', module: newModule });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar módulo.' });
    }
};


export const getModules = async (req, res) => {
  try {
      const modules = await Module.findAll();
      res.status(200).json(modules);
  } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar os módulos.' });
  }
};

export const getModule = async (req, res) => {
  const { id } = req.params;
  try {
    const module = await Module.findByPk(id);
    if (!module) {
      return res.status(404).json({ message: 'Módulo não encontrado.' });
    }
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar módulo.' });
  }
};
  

export const updateModule = async (req, res) => {
  const { id } = req.params;
  const { title, description, content } = req.body;

  try {
    const module = await Module.findByPk(id);
    if (!module) return res.status(404).json({ message: 'Módulo não encontrado.' });

    module.title = title || module.title;
    module.description = description || module.description;
    module.content = content || module.content;
    await module.save();

    res.status(200).json({ message: 'Módulo atualizado com sucesso.', module });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar módulo.' });
  }
};

export const deleteModule = async (req, res) => {
  const { id } = req.params;

  try {
    const module = await Module.findByPk(id);
    if (!module) return res.status(404).json({ message: 'Módulo não encontrado.' });

    await module.destroy();
    res.status(200).json({ message: 'Módulo excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir módulo.' });
  }
};
