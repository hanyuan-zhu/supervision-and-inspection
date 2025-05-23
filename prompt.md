

请分析当前页面 v0 版本的实现，重点关注其数据交互和界面展示。

针对每一个页面：
1.  识别所有的数据操作 (data operations)，包括数据检索 (data retrieval)、创建 (creation)、更新 (updating) 和删除 (deletion)。
2.  以结构化的格式记录这些操作，详细说明：
    * 数据来源（例如：硬编码数据 (hardcoded data)、本地存储 (local storage)）
    * 操作类型（例如：读取 (read)、创建 (create)、更新 (update)、删除 (delete)）
    * 涉及的具体数据元素。
3.  将这些信息作为注释添加到每个页面对应代码文件的顶部。

此外，请将所有识别出的数据操作汇总到一个名为 `data_operations.md` 的新 Markdown 文件中。该文件需要提供所有数据交互的全面概览，以便于后续开发 RESTful API 后端。

`data_operations.md` 文件应包含以下信息：
* 页面名称
* 触发操作的（界面）元素
* 操作类型
* 所涉及数据的描述