<script>

  import { pop } from "svelte-spa-router";

</script>
<div class="container">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="title-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => pop()} class="block" />
    <p class="title">制作工艺</p>
  </div>
  <div class="main-content">
    <p>一、摊青</p>
    <p class="content">将鲜叶摊放在簸箕或晒席上，一般厚度在3-8厘米之间，开动吊扇吹风，让空气在叶层表面水平流动，以排湿散热。时间控制在4-6个小时，最长不能超过12小时。</p>
    <p>二、蒸青</p>
    <p class="content">一般是使用普通的蒸青箱屉。蒸青时，待锅内水分充分沸腾，迅速将鲜叶均匀薄摊在屉中，叶片最好不重叠，时间控制在40-50秒内。蒸青适度的叶子应呈灰青色，捏起来柔软如棉，叶面光滑且散发清香。</p>
    <p>三、扇干水气</p>
    <p class="content">为了避免余热和水汽积聚使得叶片被闷黄，需将蒸青后的叶子迅速扇凉以降温，散发水分。</p>
    <p>四、铲头毛火</p>
    <p class="content">在焙炉盘上放置2-3千克的蒸青叶，温度大概在100度到140度左右。双手迅速捧叶高抛抖散，且随时收拢盘上的茶叶，使抖炒充分，受热均匀，失水一致。需要反复抖抄持续12分钟左右，炒至叶色暗绿、嫩梗主脉出现“鸡皮皱纹”；捏起来既不粘手，也不成团。炒后必须迅速摊凉30分钟左右。</p>
    <p>五、揉捻</p>
    <p class="content"> 在焙炉上进行，主要就是将茶叶顺着一个方向推揉、滚团，分为回转揉和对揉，二者交替进行，其间夹以铲法、解散团块。</p>
    <p>六、铲二毛火</p>
    <p class="content">继续蒸发水分、卷紧条索，初步整理形状。在100℃至110℃的焙炉盘上投放约3-5千克揉捻叶，两人对站焙炉两边，两手心相对，2人动作协调一致，左右来回揉茶，使茶坯成团随手如滚球般翻动。动手由慢至快，并随时将散落在炉盘边的零星茶叶收拢，以使受热受力均匀。大约揉捻8分钟至10分钟，以手捏成团，柔软而稍有刺手感则为完成，然后下叶摊放10分钟左右降温。</p>
  </div>

</div>


<style>
  .container {
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    box-sizing: border-box;
    padding: 32px 48px;
    background-image: url("/prefaceBg.png");
    height: 100vh;
    position: relative;
  }

  .title-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-shrink: 0;
  }

  .block {
    width: 24px;
    height: 24px;
    background: rgba(204, 204, 204, 1);
  }

  .main-content {
    height: 100%;
    overflow-y: scroll;
    color: rgba(101, 115, 9, 1);
  }

  .content {
    text-indent: 2em;
    margin-bottom: 2em;
  }
</style>