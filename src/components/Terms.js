import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";

const Terms = props => {
  return (
    <>
      <Header inPage />
      <div className="content-wrapper">
        <p>TERMS OF USE</p>

        <p>Last revised on _________</p>

        <p>Welcome to Skippit Inc. (“us,” “we,” the “Company” or “Skippit”).</p>
        <strong>1. Acceptance of Terms of Use Agreement.</strong>
        <p>
          By creating a Skippit account or by using any Skippit product
          (collectively, the “Service”) you agree to be bound by (i) these Terms
          of Use, (ii) our Privacy Policy, each of which is incorporated by
          reference into this Agreement, and (iii) any terms disclosed to you if
          you purchase or have purchased additional features, products or
          services we offer on the Service (collectively, this “Agreement”). If
          you do not accept and agree to be bound by all of the terms of this
          Agreement you should not use the Service.
        </p>

        <p>
          We may make changes to this Agreement and to the Service from time to
          time. We may do this for a variety of reasons including to reflect
          changes in or requirements of the law, new features, or changes in
          business practices. The most recent version of this Agreement will be
          posted on the Service under Settings and also on skippitapp.com, and
          you should regularly check for the most recent version. The most
          recent version is the version that applies. If the changes include
          material changes that affect your rights or obligations, we will
          notify you in advance of the changes by reasonable means, which could
          include notification through the Service or via email. If you continue
          to use the Service after the changes become effective, then you agree
          to the revised Agreement. You agree that this Agreement shall
          supersede any prior agreements (except as specifically stated herein),
          and shall govern your entire relationship with Skippit, including but
          not limited to events, agreements, and conduct preceding your
          acceptance of this Agreement.
        </p>
        <strong>2. Eligibility.</strong>
        <p>
          You must be at least 18 years of age to create an account on Skippit
          and use the Service. By creating an account and using the Service, you
          represent and warrant that:
        </p>
        <ul className="not">
          <li>you can form a binding contract with Skippit,</li>
          <li>
            you are not a person who is barred from using the Service under the
            laws of the United States or any other applicable
            jurisdiction–meaning that you do not appear on the U.S. Treasury
            Department’s list of Specially Designated Nationals or face any
            other similar prohibition,
          </li>
          <li>
            you will comply with this Agreement and all applicable local, state,
            national and international laws, rules and regulations, and you have
            never been convicted of or pled no contest to a felony, a sex crime,
            or any crime involving violence, and that you are not required to
            register as a sex offender with any state, federal or local sex
            offender registry.
          </li>
        </ul>
        <strong>3. Your Account.</strong>
        <p>
          In order to use Skippit, you may sign in using third party accounts
          that you have created.  If you do so, you authorize us to access
          certain information from those accounts. For more information
          regarding the information we collect from you and how we use it,
          please consult our Privacy Policy. You are responsible for maintaining
          the confidentiality of your login credentials you use to sign up for
          Skippit, and you are solely responsible for all activities that occur
          under those credentials. If you think someone has gained access to
          your account, please immediately contact _____________.
        </p>
        <strong>4. Modifying the Service and Termination.</strong>
        <p>
          Skippit is always striving to improve the Service and bring you
          additional functionality that you will find engaging and useful. This
          means we may add new product features or enhancements from time to
          time as well as remove some features, and if these actions do not
          materially affect your rights or obligations, we may not provide you
          with notice before taking them. We may even suspend the Service
          entirely, in which event we will notify you in advance unless
          extenuating circumstances, such as safety or security concerns,
          prevent us from doing so.
        </p>
        <p>
          You may terminate your account at any time, for any reason, by
          following the instructions in the Service.
        </p>
        <p>
          Skippit may terminate your account at any time without notice if it
          believes that you have violated this Agreement. Upon such termination,
          you will not be entitled to any refund for purchases. After your
          account is terminated, this Agreement will terminate, except that the
          following provisions will still apply to you and Skippit: Section 5,
          Section 6, and Sections 13 through 20.
        </p>
        <strong>5. Safety; Your Interactions with Other Users.</strong>
        <p>
          Though Skippit strives to encourage a respectful user experience
          through features like the double opt-in that only allows users to
          communicate if they have both indicated interest in one another, 
          <span className="bold">
            it is not responsible for the conduct of any user on or off of the
            Service. You agree to use caution in all interactions with other
            users, particularly if you decide to communicate off the Service or
            meet in person. You agree that you will not provide your financial
            information (for example, your credit card or bank account
            information), or wire or otherwise send money, to other users.
          </span>
        </p>
        <p>
          <span className="bold">
            YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS.
            YOU UNDERSTAND THAT SKIPPIT DOES NOT CONDUCT CRIMINAL BACKGROUND
            CHECKS ON ITS USERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS
            USERS. SKIPPIT MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
            CONDUCT OF USERS.
          </span>
           SKIPPIT RESERVES THE RIGHT TO CONDUCT – AND YOU AGREE THAT SKIPPIT
          MAY CONDUCT - ANY CRIMINAL BACKGROUND CHECK OR OTHER SCREENINGS (SUCH
          AS SEX OFFENDER REGISTER SEARCHES) AT ANY TIME USING AVAILABLE PUBLIC
          RECORDS.
        </p>
        <strong>6. Rights Skippit Grants You.</strong>
        <p>
          Skippit grants you a personal, worldwide, royalty-free,
          non-assignable, nonexclusive, revocable, and non-sublicensable license
          to access and use the Service. This license is for the sole purpose of
          letting you use and enjoy the Service’s benefits as intended by
          Skippit and permitted by this Agreement. Therefore, you agree not to:
        </p>
        <ul>
          <li>
            use the Service or any content contained in the Service for any
            commercial purposes without our written consent.
          </li>
          <li>
            copy, modify, transmit, create any derivative works from, make use
            of, or reproduce in any way any copyrighted material, images,
            trademarks, trade names, service marks, or other intellectual
            property, content or proprietary information accessible through the
            Service without Skippit’s prior written consent.
          </li>
          <li>
            copy, modify, transmit, create any derivative works from, make use
            of, or reproduce in any way any copyrighted material, images,
            trademarks, trade names, service marks, or other intellectual
            property, content or proprietary information accessible through the
            Service without Skippit’s prior written consent.
          </li>
          <li>
            express or imply that any statements you make are endorsed by
            Skippit.
          </li>
          <li>
            use any robot, bot, spider, crawler, scraper, site search/retrieval
            application, proxy or other manual or automatic device, method or
            process to access, retrieve, index, “data mine,” or in any way
            reproduce or circumvent the navigational structure or presentation
            of the Service or its contents.
          </li>
          <li>
            use the Service in any way that could interfere with, disrupt or
            negatively affect the Service or the servers or networks connected
            to the Service.
          </li>
          <li>
            upload viruses or other malicious code or otherwise compromise the
            security of the Service.
          </li>
          <li>
            forge headers or otherwise manipulate identifiers in order to
            disguise the origin of any information transmitted to or through the
            Service.
          </li>
          <li>
            “frame” or “mirror” any part of the Service without Skippit’s prior
            written authorization.
          </li>
          <li>
            use meta tags or code or other devices containing any reference to
            Skippit or the Service (or any trademark, trade name, service mark,
            logo or slogan of Skippit) to direct any person to any other website
            for any purpose.
          </li>
          <li>
            modify, adapt, sublicense, translate, sell, reverse engineer,
            decipher, decompile or otherwise disassemble any portion of the
            Service, or cause others to do so.
          </li>
          <li>
            use or develop any third-party applications that interact with the
            Service or other users’ Content or information without our written
            consent.
          </li>
          <li>
            use, access, or publish the Skippit application programming
            interface without our written consent.{" "}
          </li>
          <li>
            probe, scan or test the vulnerability of our Service or any system
            or network.
          </li>
          <li>
            encourage or promote any activity that violates this Agreement.
          </li>
        </ul>
        <p>
          The Company may investigate and take any available legal action in
          response to illegal and/ or unauthorized uses of the Service,
          including termination of your account.
        </p>
        <p>
          Any software that we provide you may automatically download and
          install upgrades, updates, or other new features. You may be able to
          adjust these automatic downloads through your device’s settings.
        </p>
        <strong>7. Rights You Grant Skippit.</strong>
        <p>
          By creating an account, you grant to Skippit a worldwide,
          transferable, sub-licensable, royalty-free, right and license to host,
          store, use, copy, display, reproduce, adapt, edit, publish, modify and
          distribute information you authorize us to access from third parties,
          as well as any information you post, upload, display or otherwise make
          available (collectively, “post”) on the Service or transmit to other
          users (collectively, “Content”). Skippit’s license to your Content
          shall be non-exclusive, except that Skippit’s license shall be
          exclusive with respect to derivative works created through use of the
          Service. For example, Skippit would have an exclusive license to
          screenshots of the Service that include your Content. In addition, so
          that Skippit can prevent the use of your Content outside of the
          Service, you authorize Skippit to act on your behalf with respect to
          infringing uses of your Content taken from the Service by other users
          or third parties. This expressly includes the authority, but not the
          obligation, to send notices pursuant to 17 U.S.C. § 512(c)(3) (i.e.,
          DMCA Takedown Notices) on your behalf if your Content is taken and
          used by third parties outside of the Service. Our license to your
          Content is subject to your rights under applicable law (for example
          laws regarding personal data protection to the extent any Content
          contains personal information as defined by those laws) and is for the
          limited purpose of operating, developing, providing, and improving the
          Service and researching and developing new ones. You agree that any
          Content you place or that you authorize us to place on the Service may
          be viewed by other users and may be viewed by any person visiting or
          participating in the Service (such as individuals who may receive
          shared Content from other Skippit users).
        </p>
        <p>
          You agree that all information that you submit upon creation of your
          account, including information submitted from any of your third party
          accounts, is accurate and truthful and you have the right to post the
          Content on the Service and grant the license to Skippit above.
        </p>
        <p>
          You understand and agree that we may monitor or review any Content you
          post as part of a Service. We may delete any Content, in whole or in
          part, that in our sole judgment violates this Agreement or may harm
          the reputation of the Service.
        </p>
        <p>
          If we feel that your behavior towards any of our users or affiliates
          is at any time threatening or offensive, we reserve the right to
          immediately terminate your account.
        </p>
        <p>
          In consideration for Skippit allowing you to use the Service, you
          agree that we, our affiliates, and our third-party partners may place
          advertising on the Service. By submitting suggestions or feedback to
          Skippit regarding our Service, you agree that Skippit may use and
          share such feedback for any purpose without compensating you.
        </p>
        <p>
          You agree that Skippit may access, preserve and disclose your account
          information and Content if required to do so by law or in a good faith
          belief that such access, preservation or disclosure is reasonably
          necessary, such as to: (i) comply with legal process; (ii) enforce
          this Agreement; (iii) respond to claims that any Content violates the
          rights of third parties; (iv) respond to your requests for customer
          service; or (v) protect the rights, property or personal safety of the
          Company or any other person.
        </p>
        <strong>8. Community Rules.</strong>
        <p>By using the Service, you agree that you will not:</p>
        <ul>
          <li>
            use the Service for any purpose that is illegal or prohibited by
            this Agreement.
          </li>
          <li>use the Service for any harmful or nefarious purpose.</li>
          <li>use the Service in order to damage Skippit.</li>
          <li>spam, solicit money from or defraud any users.</li>
          <li>
            impersonate any person or entity or post any images of another
            person without his or her permission.
          </li>
          <li>
            bully, “stalk,” intimidate, assault, harass, mistreat or defame any
            person.
          </li>
          <li>
            post any Content that violates or infringes anyone’s rights,
            including rights of publicity, privacy, copyright, trademark or
            other intellectual property or contract right.
          </li>
          <li>
            post any Content that is hate speech, threatening, sexually explicit
            or pornographic; incites violence; or contains nudity or graphic or
            gratuitous violence.
          </li>
          <li>
            post any Content that promotes racism, bigotry, hatred or physical
            harm of any kind against any group or individual.
          </li>
          <li>
            solicit passwords for any purpose, or personal identifying
            information for commercial or unlawful purposes from other users or
            disseminate another person’s personal information without his or her
            permission.
          </li>
          <li>use another user’s account.</li>
          <li>
            create another account if we have already terminated your account,
            unless you have our permission.
          </li>
        </ul>
        <p>
          Skippit reserves the right to investigate and/ or terminate your
          account without a refund of any purchases if you have violated this
          Agreement, misused the Service or behaved in a way that Skippit
          regards as inappropriate or unlawful, including actions or
          communications that occur on or off the Service.
        </p>
        <strong>9. Other Users’ Content.</strong>
        <p>
          Although Skippit reserves the right to review and remove Content that
          violates this Agreement, such Content is the sole responsibility of
          the user who posts it, and Skippit cannot guarantee that all Content
          will comply with this Agreement. If you see Content on the Service
          that violates this Agreement, please report it within the Service or
          via help@skippitapp.com.
        </p>
        <strong>
          10. Notice and Procedure for Making Claims of Copyright Infringement.
        </strong>
        <p>
          If you believe that your work has been copied and posted on the
          Service in a way that constitutes copyright infringement, please
          provide us with the following information:
        </p>
        <ul>
          <li>
            an electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright interest;
          </li>
          <li>
            a description of the copyrighted work that you claim has been
            infringed;
          </li>
          <li>
            a description of where the material that you claim is infringing is
            located on the Service (and such description must be reasonably
            sufficient to enable us to find the alleged infringing material);
          </li>
          <li>
            your contact information, including address, telephone number and
            email address;
          </li>
          <li>
            a written statement by you that you have a good faith belief that
            the disputed use is not authorized by the copyright owner, its
            agent, or the law; and
          </li>
          <li>
            a statement by you, made under penalty of perjury, that the above
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner’s
            behalf.
          </li>
        </ul>
        <strong>11. Disclaimers.</strong>
        <p>
          SKIPPIT PROVIDES THE SERVICE ON AN “AS IS” AND “AS AVAILABLE” BASIS
          AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, GRANTS NO WARRANTIES OF
          ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH
          RESPECT TO THE SERVICE (INCLUDING ALL CONTENT CONTAINED THEREIN),
          INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF SATISFACTORY
          QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
          NON-INFRINGEMENT. SKIPPIT DOES NOT REPRESENT OR WARRANT THAT (A) THE
          SERVICE WILL BE UNINTERRUPTED, SECURE OR ERROR FREE, (B) ANY DEFECTS
          OR ERRORS IN THE SERVICE WILL BE CORRECTED, OR (C) THAT ANY CONTENT OR
          INFORMATION YOU OBTAIN ON OR THROUGH THE SERVICE WILL BE ACCURATE.
        </p>
        <p>
          SKIPPIT TAKES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR ANOTHER
          USER OR THIRD PARTY POSTS, SENDS OR RECEIVES THROUGH THE SERVICE. ANY
          MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE
          SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK.
        </p>
        <p>
          SKIPPIT DISCLAIMS AND TAKES NO RESPONSIBILITY FOR ANY CONDUCT OF YOU
          OR ANY OTHER USER, ON OR OFF THE SERVICE.
        </p>
        <strong>12. Third Party Services.</strong>
        <p>
          The Service may contain advertisements and promotions offered by third
          parties and links to other web sites or resources. Skippit is not
          responsible for the availability (or lack of availability) of such
          external websites or resources. If you choose to interact with the
          third parties made available through our Service, such party’s terms
          will govern their relationship with you. Skippit is not responsible or
          liable for such third parties’ terms or actions.
        </p>
        <strong>13. Limitation of Liability.</strong>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
          SKIPPIT, ITS AFFILIATES, EMPLOYEES, LICENSORS OR SERVICE PROVIDERS BE
          LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
          SPECIAL, PUNITIVE, OR ENHANCED DAMAGES, INCLUDING, WITHOUT LIMITATION,
          LOSS OF PROFITS, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS
          OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
          SERVICE; (II) THE CONDUCT OR CONTENT OF OTHER USERS OR THIRD PARTIES
          ON, THROUGH OR FOLLOWING USE OF THE SERVICE; OR (III) UNAUTHORIZED
          ACCESS, USE OR ALTERATION OF YOUR CONTENT, EVEN IF SKIPPIT HAS BEEN
          ADVISED AT ANY TIME OF THE POSSIBILITY OF SUCH DAMAGES.
          NOTWITHSTANDING THE FOREGOING, IN NO EVENT SHALL SKIPPIT’S AGGREGATE
          LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO
          THE SERVICE OR THIS AGREEMENT EXCEED THE AMOUNT PAID, IF ANY, BY YOU
          TO SKIPPIT DURING THE TWENTY-FOUR (24) MONTH PERIOD IMMEDIATELY
          PRECEDING THE DATE THAT YOU FIRST FILE A LAWSUIT, ARBITRATION OR ANY
          OTHER LEGAL PROCEEDING AGAINST SKIPPIT, WHETHER IN LAW OR IN EQUITY,
          IN ANY TRIBUNAL. THE DAMAGES LIMITATION SET FORTH IN THE IMMEDIATELY
          PRECEDING SENTENCE APPLIES (i) REGARDLESS OF THE GROUND UPON WHICH
          LIABILITY IS BASED (WHETHER DEFAULT, CONTRACT, TORT, STATUTE, OR
          OTHERWISE), (ii) IRRESPECTIVE OF THE TYPE OF BREACH OF OBLIGATIONS,
          AND (iii) WITH RESPECT TO ALL EVENTS, THE SERVICE, AND THIS AGREEMENT.
        </p>
        <p>
          THE LIMITATION OF LIABILITY PROVISIONS SET FORTH IN THIS SECTION 15
          SHALL APPLY EVEN IF YOUR REMEDIES UNDER THIS AGREEMENT FAIL WITH
          RESPECT TO THEIR ESSENTIAL PURPOSE.
        </p>
        <p>
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN
          DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS IN THIS
          SECTION MAY NOT APPLY TO YOU.
        </p>
        <strong>
          14. Retroactive and Prospective Arbitration, Class-Action Waiver, and
          Jury Waiver.
        </strong>
        <p>Except where prohibited by applicable law:</p>
        <ul>
          <li>
            The exclusive means of resolving any dispute or claim arising out of
            or relating to this Agreement (including any alleged breach
            thereof), or the Service, regardless of the date of accrual and
            including past, pending, and future claims, shall be BINDING
            ARBITRATION administered by the American Arbitration Association
            under the Consumer Arbitration Rules. The one exception to the
            exclusivity of arbitration is that you have the right to bring an
            individual claim against Skippit in a small claims court of
            competent jurisdiction in the county in which you reside, or in San
            Francisco, CA. Such arbitration shall be conducted by written
            submissions only, unless either you or Skippit elect to invoke the
            right to an oral hearing before the Arbitrator. But whether you
            choose arbitration or small claims court, you agree that you will
            not under any circumstances commence, maintain, or participate in
            any class action, class arbitration, or other representative action
            or proceeding against Skippit.
          </li>
          <li>
            By accepting this Agreement, you agree to the Arbitration Agreement
            in this Section 16 (subject to existing users’ limited one-time
            right to opt out within thirty (30) days, discussed below). In doing
            so, BOTH YOU AND SKIPPIT GIVE UP THE RIGHT TO GO TO COURT to assert
            or defend any claims between you and Skippit (except for matters
            that may be properly taken to a small claims court and are within
            such court’s jurisdiction). YOU ALSO GIVE UP YOUR RIGHT TO
            PARTICIPATE IN A CLASS ACTION OR OTHER CLASS PROCEEDING, including,
            without limitation, any past, pending or future class actions,
            including those existing as of the date of this Agreement.
          </li>
        </ul>
        <strong>15. Governing Law.</strong>
        <p>
          Except where our arbitration agreement is prohibited by law, the laws
          of California, U.S.A., without regard to its conflict of laws rules,
          shall apply to any disputes arising out of or relating to this
          Agreement, the Service, or your relationship with Skippit.
          Notwithstanding the foregoing, the Arbitration Agreement in Section 16
          above shall be governed by the Federal Arbitration Act.
        </p>
        <strong>16. Venue.</strong>
        <p>
          Except for claims that may be properly brought in a small claims court
          of competent jurisdiction in the county in which you reside or in San
          Francisco, CA, all claims arising out of or relating to this
          Agreement, to the Service, or to your relationship with Skippit that
          for whatever reason are not submitted to arbitration will be litigated
          exclusively in the federal or state courts of San Francisco, CA,
          U.S.A. You and Skippit consent to the exercise of personal
          jurisdiction of courts in the State of California and waive any claim
          that such courts constitute an inconvenient forum.
        </p>
        <strong>17. Indemnity by You.</strong>
        <p>
          You agree, to the extent permitted under applicable law, to indemnify,
          defend and hold harmless Skippit, our affiliates, and their and our
          respective officers, directors, agents, and employees from and against
          any and all complaints, demands, claims, damages, losses, costs,
          liabilities and expenses, including attorney’s fees, due to, arising
          out of, or relating in any way to your access to or use of the
          Service, your Content, or your breach of this Agreement.
        </p>
        <strong>18. Entire Agreement; Other.</strong>
        <p>
          This Agreement, along with the Privacy Policy, the Safety Tips, and
          any terms disclosed to you if you purchase or have purchased
          additional features, products or services we offer on the Service,
          contains the entire agreement between you and Skippit regarding your
          relationship with Skippit and the use of the Service, with the
          following exception: anyone who opted out of the retroactive
          application of Section 16 is still subject to and bound by any prior
          agreements to arbitrate with Skippit as well as this agreement to
          arbitrate on a going forward basis. If any provision of this Agreement
          is held invalid, the remainder of this Agreement shall continue in
          full force and effect. The failure of Skippit to exercise or enforce
          any right or provision of this Agreement shall not constitute a waiver
          of such right or provision. You agree that your Skippit account is
          non-transferable and all of your rights to your account and its
          Content terminate upon your death. No agency, partnership, joint
          venture, fiduciary or other special relationship or employment is
          created as a result of this Agreement and you may not make any
          representations on behalf of or bind Skippit in any manner.
        </p>
      </div>
      <Under inPage />
    </>
  );
};

export default Terms;
