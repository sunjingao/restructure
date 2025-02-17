# 规划

为实现最终的目标，对重构过程进行了过程拆分。总共分为了五个部分。<br />
因为想要优先看到最终的页面展示效果，所以把组件库实现放到了第一步，对整体最友好的方式应该是先调整架构。

点击可查看按照整体规划实现的<a href="#/restructure/component" target="_blank">《组件库》</a>、<a href="#/restructure/framework" target="_blank">《代码架构》</a>、<a href="#/restructure/rule" target="_blank">《前端规范》</a>、<a href="#/step4" target="_blank">《步骤四》</a>

## 一：组件库搭建及实现

因为组件库会对各个项目产生影响，非常重要。并且考虑到当前前端开发的能力等原因。此过程由我单独实现。<br />
作为第一步，也能最快的给领导和同事展示出页面效果。

|  事项  | 组件库搭建及实现                                                                                                                           |
| --- |------------------------------------------------------------------------------------------------------------------------------------|
|  原因  | 1：开发人员不需要在各个项目中单独实现组件，提升了开发效率，避免了扩展功能时的覆盖缺失等诸多问题。 <br />2：相同规则的展示效果会一致，给业务人员更好的使用体验。 <br /> 3：有组件库文档，能够对业务进行不断的沉淀，形成组件，提高产品和开发的效率。 |
|  步骤  | 1：总结所需组件。<br /> 2：搭建组件库框架。<br /> 3：实现所需组件。<br /> 4：组件库文档编写。<br /> 5：发布至npm。                                                        |


## 二：基座中页面拆分 及 关键页面设计

基座拆分和关键页面设计这两部分可以由前端开发成员与UI并行进行。<br />步骤三涉及到基座、交互、子项目通用内容的调整，非常重要，由我开发。大家并行进行，能够尽快推进。

|  事项  | **子页面从基座中拆分出去**                                                                                    | **登录页设计、首页设计、整体排版设计、一级菜单icon使用iconfont设计**                                                                                                                                                                     |
| --- |----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  原因  | 基座作为微前端项目集群的入口，影响着所有项目，非常重要，不应该存放业务需求的页面，一旦出现问题，会影响所有用户。  | 1：登录页、首页使用频率最高，影响最大，但目前展示的效果非常难看。<br />2：整体布局并不合理，浪费了大量展示空间。<br /> 3：一级菜单的icon目前使用了element 图标库，font awesome图标库，统一成iconfont图标库，使用简单，减少无用库的使用。                                                                   |
|  时间  | 6人/天                                                                                               | 7人/天                                                                                                                                                                                                           |
|  步骤  | 将以下3个页面从基座中拆分出去： <br/> 网点管理→可停网点管理   4人/天 <br/>    活动管理→七夕节活动照片审核 1人/天 <br/> APP管理→押金收款账户       1人/天 | 1：登录页面重新设计，尽量美观一些，包括但不限于以下两个要求 <br />       1.1：背景图，和摩捷智行相关的 <br />        1.2：登录区域的展示重新设计        2人/天  <br /> 2：首页出个设计，和摩捷智行相关的 <br /> 3：设计合理的排版，能展示更多有效数据 2人/天 <br /> 4：菜单左侧的图标（仅一级菜单）通过iconfont来设计实现   2人/天 |

## 三：基座重写、基座与子项目解耦、子项目调整

这个过程涉及到公共部分，影响很大，且此处修改需要测试人员全量测试，成本很高，最好一次性做到最好。所以由我处理。<br />
子项目我会调整好一个，写出文档，即我会优先实现步骤四，成员可以参考文档进行并行开发。

|  事项  | 基座重写、基座与子项目解耦、子项目调整                                                                                                                                                                                                                                                                  |
| --- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  注意  | 子页面改完需注意样式不受影响。                                                                                                                                                                                                                                                                      |
|  原因  | 1：基座在原来的拆分中并未修改，存在大量无用的业务代码；<br />包含着大量无用的第三方库。框架：如vue、react、jquery。UI库：antd、element、bootstrap等等。<br />基座没有继续开发的必要了，需要重写。 <br /> 2：为实现基座与子项目的路由同步，开发人员进行了很多无用的交互。关于路由的位置都受到影响。需要调整。<br /> 3：存在很多无用的全局缓存和状态管理数据。<br /> 4：存在无用的交互，如子项目操作基座的标题。 <br /> 5：子项目的样式存在诸多问题，需要进行调整。           |
|  时间  | 10人/天                                                                                                                                                                                                                                                                                |
|  步骤  | 1：基座重新编写，架构为vite + vue3 + 内部组件库。登录页、首页、整体布局按照UI设计进行开发。<br /> 2：基座与子项目的交互调整，微前端需要调整为qiankun的方式，涉及到 <br /> 1）去除原有wujie的交互； <br /> 2）将父子间的交互减到最少； <br /> 3：清理无用的全局缓存，调整状态管理数据。 <br />  4：调整或去除部分交互，如子项目宽度不再依赖基座写死的菜单宽度，子项目不再操作基座的标题。<br /> 5：子项目效果调整，如很多列表页面会有两个纵向滚动条。 <br />  时间：10人/天 |

## 四：子项目调整

我会优先出个文档，大家可参考文档对其余项目进行操作。

|  事项  | 子项目调整（原有项目只进行维护，新页面将使用支持内部组件库的最新架构）                                                                                                                                |
| --- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  原因  | 同步各子项目                                                                                                                                                             |
|  时间  | 1天/页面                                                                                                                                                              |
|  步骤  | 1：旧项目进行代码调整，主要以维护为主，具体过程可参考文档：<a href="#/step4" target="_blank">《调整过程》</a> <br /> 2：重新划分项目结构，新页面使用最新架构及组件库在新项目中进行开发：<a href="#/restructure/framework" target="_blank">《项目划分》</a> |

## 五：规范流程、完善文档

|  事项  |  规范开发流程，完善前端文档  |
| --- | --- |
|  原因  |  1：前端的流程、代码、项目、交互等规则无法及时同步给每位同事。<br /> 2：前端的经验无法沉淀，不能有效减少各同事的问题  |
|  步骤  |  整理并完善前端规范，包括流程、代码、项目、交互等等。 |