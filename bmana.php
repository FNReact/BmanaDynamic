<?php include('./include/header.php'); ?>

<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://icircles.app/api/medicalassociation/home/166');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
$result = json_decode($response);
curl_close($ch);

$ms_id = $result->data->ms_id;
$front_section = $result->data->front_sections;
$sponsors = $result->data->sponsors;
$main_nav = $result->data->main_nav;
$no_position = $result->data->no_position;
$ms_info = $result->data->ms_info;
$sliders = $result->data->sliders;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://icircles.app/api/medicalassociation/membersearch/' . $ms_id);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response1 = curl_exec($ch);
$members = json_decode($response1);
$members = $members->data;
curl_close($ch);



?>


<!--          Banner Part Start
     *****************************************-->
<section>
    <div class="banner_main">
        <div class="banner_slider">
            <?php foreach ($sliders as $key => $item) { ?>
            <div class="banner"
                style='background:url(<?="https://icircles.app/uploads/slider/" . $item->microsite_id . "/" . $item->image ?>) no-repeat center/ cover'>
                <div class="container">
                    <div class="banner_wrapper">
                        <div class="row">
                            <div class="col-lg-10">
                                <div class="banner_text_wrap">
                                    <div class="phySearch_search">


                                    </div>

                                    <!--div class="banner_search" data-aos="fade-up-left" data-aos-easing="ease" data-aos-duration="5s">

                                                       
                                                  </div-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
        <div class="container">
            <div class="banner_wrapper">
                <div class="row">
                    <div class="col-lg-10">
                        <div class="banner_wrap">
                            <div class="banner_search" data-aos="fade-up-left" data-aos-easing="ease"
                                data-aos-duration="5s">
                                <h1>Bangladesh Medical Association of North America (BMANA)</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
<!--          BAanner Part End
     *****************************************-->

<!--          SideNAvbar Part Start
     *****************************************-->
<section>
    <div class="sideBar d-lg-block d-none">
        <div class="container">
            <div class="sideBar_wrapper">
                <div class="sideBar_contain">
                    <div class="logo text-center">
                        <img src="images/bmana.png" alt="">
                    </div>
                    <div class="login_btn text-center">
                        <?php if (isset($_SESSION['username']) && $_SESSION['username']) { ?>
                        <a href="profile.php"> <span><i class="fa-solid fa-user"></i></span>
                            <?= $_SESSION['username'] ?>
                        </a>
                        <?php } else { ?>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"> <span><i
                                    class="fa-solid fa-user"></i></span> Member Login</a>
                        <?php } ?>
                    </div>
                    <div class="nav_list">
                        <ul>
                            <li><a href="index.php"> <span><i class="fa-solid fa-house"></i></span> Home</a></li>
                            <?php foreach ($main_nav as $key => $item) { ?>
                            <li>
                                <a href="page.php?id=<?= $item->id ?>"> <span><i
                                            class="fa-solid fa-circle-info"></i></span>
                                    <?= $item->menu_name ?>
                                    <?php if (count($item->sub_nav) > 0) { ?>
                                    <span class="droppper"><i class="fa-solid fa-caret-down"></i></span>
                                    <?php } ?>
                                </a>
                                <?php if (count($item->sub_nav) > 0) { ?>
                                <ul class="sub_down">
                                    <?php
                                      foreach ($item->sub_nav as $key => $sub_nav) {
                                    ?>
                                    <li><a href="page.php?id=<?= $sub_nav->id ?>">
                                            <?= $sub_nav->menu_name ?>
                                        </a></li>
                                    <?php } ?>
                                </ul>
                                <?php } ?>
                            </li>
                            <?php } ?>
                            <li><a href="contact.php"> <span><i class="fa-solid fa-phone"></i></span> Contact
                                    Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--        SideNAvbar Part End
     *****************************************-->

<!--          committee Part Start
     *****************************************-->
<section>
    <div class="committe">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section_header">
                        <h4> EXECUTIVE COMMITTEE</h4>
                    </div>
                </div>
            </div>
            <div class="committe_wrapper">
                <div class="row justify-content-center">
                    <div style="width: 0% ;"></div>
                    <?php foreach ($members as $key => $item) {
                         if ($item->membership_type_id == 1) {
                              $name = $item->firstname . ' ' . $item->lastname;
                    ?>
                    <div class="col-sm-6 col-md-4 col-lg-3" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        data-aos="fade-up-right" data-aos-easing="ease" data-aos-duration="5s"
                        onclick="bCardPreview('<?= $name ?>','<?= $item->thumb ?>','<?= $item->designation ?>','<?= $item->speciality ?>','<?= $item->email ?>',`<?= $item->about_member ?>`)">
                        <div class="committe_wrap">
                            <div class="profile_img text-center">
                                <div class="p_img">
                                    <img src=<?="https://icircles.app/" . $item->thumb ?> alt="">
                                </div>
                                <h4>
                                    <?php echo $item->designation ?>
                                </h4>
                            </div>
                            <div class="profile_info text-center">
                                <h5>
                                    <?php echo $item->firstname . ' ' . $item->lastname ?>, <?=
                                   $item->speciality ?>
                                </h5>
                                <h6 style="font-style: italic">
                                    <?= $item->email ?>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <?php }
                    } ?>
                </div>
            </div>
        </div>
    </div>
</section>
<!--          committee Part End
     *****************************************-->
<!--          Mission Part Start
     *****************************************-->
<section>
    <div class="mission">
        <div class="container">

            <div class="mission_wrapper">
                <div class="row">

                    <?php foreach (array_slice($no_position, 0, 3) as $key => $item) { ?>
                    <div class="col-md-6 col-lg-4 text-center height-140">
                        <div class="mission_item">
                            <h4>
                                <?php echo $item->menu_name ?>
                            </h4><br /><br /><br />
                            <a href="page.php?id=<?= $item->id ?>">Read More</a>
                        </div>
                    </div>
                    <?php } ?>

                </div>
            </div>
            <div class="card_wrapper newsannouc">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="section_header">
                            <h4> NEWS AND ANNOUNCEMENT </h4>
                        </div>
                    </div>
                </div>
                <div class="row card_slider">
                    <?php foreach ($front_section as $key => $item) { ?>
                    <div class="col-lg-4 text-center">
                        <div class="slider_item">
                            <div class="sl_img">
                                <img src="<?="https://icircles.app/uploads/content/" . $ms_id . "/" . $item->featured_image ?>"
                                    alt="">
                            </div>
                            <h4>
                                <?php echo $item->page_title ?>
                            </h4>
                            <a href="page.php?id=<?= $item->id ?>">Read More</a>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
            <div class="portocol" data-aos="fade-up-right" data-aos-easing="ease" data-aos-duration="5s">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <a href="#">Corona virus management and protocol <span><i
                                    class="fa-solid fa-download"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--          Mission Part End
     *****************************************-->


<!--          MamberShip Part Start
     *****************************************-->
<section>
    <div class="mambership">
        <div class="container">
            <div class="mamber_wrapper">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h4>Whatever your Passion, We cater to your unique needs.</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centu</p>
                        <div class="mamber_adder">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Become A
                                Member</a>
                            <span><a href="#" class="mamber_add"><i class="fa-solid fa-user-plus"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--          MamberShip Part End
     *****************************************-->

<!--          Rescource Part Start
     *****************************************-->
<section>
    <div class="resourcs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section_header">
                        <h4> RESOURCES FOR BMANA MEMBERS </h4>
                    </div>
                </div>
            </div>
            <div class="resources_wrapper" data-aos="fade-up">
                <div class="row">
                    <?php foreach (array_slice($no_position, 6, ???? as $key => $item) { ?>
                    <div class="col-md-6 col-lg-3">
                        <div class="resource_wrap">
                            <div class="top_wrap text-center">
                                <i class="fa-solid fa-chalkboard-user"></i>
                                <h4><a href="page.php?id=<?= $item->id ?>" target="_blank">
                                        <?= $item->menu_name ?>
                                    </a></h4>
                            </div>
                            <div class="bottom_wrap">
                                <p>
                                    <?= strip_tags($item->body_content) ?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>
<!--          Rescource Part End
     *****************************************-->

<!--          Sponsor Part Start
     *****************************************-->

<!--          Sponsor Part End
     *****************************************-->

<!--          News Part Start
     *****************************************-->
<section>
    <div class="news">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section_header">
                        <h4> PAST CONVENTIONS </h4>
                    </div>
                </div>
            </div>
            <div class="news_wrapper">
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <div class="news_imgSlide">
                            <?php foreach (array_slice($no_position, 6) as $key => $item) { ?>
                            <div class="news_img">
                                <a href="<?="page.php?id=" . $item->id ?>" target="_blank" rel="noopener noreferrer">
                                    <img src=<?="https://icircles.app/uploads/content/" . $item->microsite_id .
                                      "/" . $item->featured_image ?> alt="">
                                </a>
                            </div>
                            <?php } ?>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</section>
<!--          News Part End
     *****************************************-->

<!--          Convention Part Start
     *****************************************-->
<section>
    <div class="convention">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="convention_wrapper text-center">
                        <h4>41st BMANA Convention 2022 ??? Where Great Minds Unite. </h4>
                        <a href="https://bmanaconvention2022.org/">bmanaconvention2022.org</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--          Convention Part End
     *****************************************-->


<!--          Donate Part Start
     *****************************************-->
<section>
    <div class="donate_banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section_header">
                        <h4>DONATE TO BMANA DISASTER RELIEF FUND</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="donate">
        <div class="container">
            <div class="donate_wrapper">
                <div class="row">
                    <div class="donate_textWrap">
                        <h3>Dear Colleagues,</h3>
                        <p>Please stay safe and practice best medicine in this critical moments of our social and
                            clinical life around COVID-19. Our physicians in Bangladesh are in dire needs of
                            Personal Protective Equipment(PPE). There will be also need of ventilators, clinical
                            advice and knowledge exchange. We created a task force which is working diligently
                            with physicians in USA and Bangladesh. We are requesting your help and donations to
                            BMANA disaster fund. Please donate your time and money as you have done previously
                            during natural disasters locally and in Bangladesh.</p>
                        <p>It is time to extend humanitarian assistance and help them to the best of our ability.
                        </p>
                    </div>
                </div>
                <div class="donate_site">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-lg-6 text-center">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#donatemodal">Donate Here</a>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="donate_right">
                                <h4>Mail to :</h4>
                                <ul>
                                    <li>Dr. Abul K Azad</li>
                                    <li>Treasurer BMANA</li>
                                    <li>8 Sage Estate</li>
                                    <li>Menands, NY 12204</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--          Donate Part End
     *****************************************-->

<!--          NewsLetter Part Start
     *****************************************-->

<section>
    <div class="mamberModal">
        <div class="container">
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="profileImg">
                                <img class="delete_id rounded-circle" src="images/profileMAn.png" alt="">
                            </div>
                            <div class="profileDescription text-center">
                                <h4 class="abt_name"></h4>
                                <h5 class="abt_speciality"></h5>
                                <span class="abt_email"></span>
                                <div class="abt_details"></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="mamberModalClose" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>