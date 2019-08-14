import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Under from "./Under/Under";
import "./Pages.sass";

const Privacy = props => {
  return (
    <>
      <Header inPage />
      <div className="content-wrapper">
        <p>
          <span className="bold">PRIVACY POLICY</span>
        </p>

        <p>
          Welcome to Skippit’s Privacy Policy. Thank you for taking the time to
          read it.
        </p>

        <p>
          We appreciate that you trust us with your information and we intend to
          always keep that trust. This starts with making sure you understand
          the information we collect, why we collect it, how it is used and your
          choices regarding your information. This Privacy Policy describes our
          privacy practices in plain language, keeping legal and technical
          jargon to a minimum.
        </p>
        <p>
          This Privacy Policy applies beginning with your use of our application
          or other products.
        </p>
        <strong>1. WHO WE ARE</strong>
        <p>
          The company responsible for your information under this Privacy Policy
          is:
        </p>
        <p>
          Skippit Inc.
          <br />
          135 Main St, 2nd floor
          <br />
          San Francisco, CA, USA
          <br />
          United States
        </p>
        <strong>2. WHERE THIS PRIVACY POLICY APPLIES</strong>

        <p>
          This Privacy Policy applies to websites, applications, events and
          other services operated by Skippit. For simplicity, we refer to all of
          these as our “services” in this Privacy Policy.
        </p>
        <strong>3. INFORMATION WE COLLECT</strong>
        <p>
          We help you develop meaningful connections which requires us to
          receive some information about you, such as basic profile details and
          the types of people you’d like to meet. We also collect information
          generated as you use our services, for example access logs, as well as
          information from third parties, like when you access our services
          through a social media account.{" "}
        </p>
        <p className="underline">Information you give us</p>
        <p>
          You choose to give us certain information when using our services.
          This includes:
        </p>
        <ul>
          <li>
            When you create an account, you provide us with at least your login
            credentials, as well as some basic details necessary for the service
            to work, such as your gender and date of birth.
          </li>
          <li>
            When you complete your profile, you can share with us additional
            information, such as details on your personality, lifestyle,
            interests and other details about you, as well as content such as
            photos and videos. To add certain content, like pictures or videos,
            you may allow us to access your camera or photo album.{" "}
          </li>
          <li>
            When you subscribe to a paid service or make a purchase directly
            from us (rather than through a platform such as iOS or Android), you
            provide us or our payment service provider with information, such as
            your debit or credit card number or other financial information.
          </li>
          <li>
            When you choose to participate in our promotions, events or
            contests, we collect the information that you use to register or
            enter.
          </li>
          <li>
            If you contact us, we collect the information you give us during the
            interaction. Sometimes, we monitor or record these interactions for
            training purposes and to ensure a high quality of service.
          </li>
        </ul>
        <p>
          Of course, we also process your chats with other users as well as the
          content you publish, as part of the operation of the services.
        </p>

        <p className="underline">Information we receive from others</p>
        <p>
          In addition to the information you provide us directly, we receive
          information about you from others, including:
        </p>
        <ul>
          <li>
            Other users may provide information about you as they use our
            services. For instance, we may collect information about you from
            other users if they contact us about you.
          </li>
        </ul>

        <p className="underline">
          Information collected when you use our services
        </p>
        <p>
          When you use our services, we collect information about which features
          you’ve used, how you’ve used them and the devices you use to access
          our services. We collect information about your activity on our
          services, for instance how you use them (e.g., date and time you
          logged in, features you’ve been using, searches, clicks and pages
          which have been shown to you, referring webpage address, advertising
          that you click on) and how you interact with other users (e.g., users
          you connect and interact with, time and date of your exchanges, number
          of messages you send and receive).
        </p>

        <p className="underline">Other information you may consent to</p>
        <p>
          If you give us permission, we can collect your precise geolocation
          (latitude and longitude) through various means, depending on the
          service and device you’re using, including GPS, Bluetooth or Wi-Fi
          connections. The collection of your geolocation may occur in the
          background even when you aren’t using the services if the permission
          you gave us expressly permits such collection. If you decline
          permission for us to collect your geolocation, we will not collect it.
          Similarly, if you consent, we may collect your photos and videos (for
          instance, if you want to publish a photo, video or streaming on the
          services).
        </p>

        <strong>
          4. COOKIES AND OTHER SIMILAR DATA COLLECTION TECHNOLOGIES
        </strong>
        <p>
          We use and may allow others to use cookies and similar technologies
          (e.g., web beacons, pixels) to recognize you and/or your device(s).
        </p>

        <strong>5. HOW WE USE INFORMATION</strong>
        <p>
          The main reason we use your information is to deliver and improve our
          services. The following are various reasons we may use your
          information, as well as examples of such use.
        </p>
        <p className="underline">
          To administer your account and provide our services to you
        </p>
        <ul>
          <li>Create and manage your account</li>
          <li>
            Provide you with customer support and respond to your requests
          </li>
          <li>Complete your transactions</li>
          <li>
            Communicate with you about our services, including order management
            and billing
          </li>
        </ul>

        <p className="underline">To help you connect with other users</p>
        <ul>
          <li>
            Analyze your profile and that of other users to recommend meaningful
            connections
          </li>
          <li>Show users’ profiles to one another</li>
        </ul>

        <p className="underline">
          To ensure a consistent experience across your devices
        </p>
        <ul>
          <li>
            Link the various devices you use so that you can enjoy a consistent
            experience of our services on all of them. We do this by linking
            devices and browser data, such as when you log into your account on
            different devices or by using partial or full IP address, browser
            version and similar data about your devices to help identify and
            link them.
          </li>
          <li>Show users’ profiles to one another</li>
        </ul>

        <p className="underline">To provide new Skippit services to you</p>
        <ul>
          <li>
            Register and display your profile on new Skippit features and apps
          </li>
          <li>Administer your account on these new features and apps</li>
        </ul>

        <p className="underline">To serve you relevant offers and ads</p>
        <ul>
          <li>Administer sweepstakes, contests, discounts or other offers</li>
          <li>
            Develop, display and track content and advertising tailored to your
            interests on our services and other sites
          </li>
          <li>
            Communicate with you by email, phone, social media or mobile device
            about products or services that we think may interest you
          </li>
        </ul>

        <p className="underline">
          To improve our services and develop new ones
        </p>
        <ul>
          <li>Administer focus groups and surveys</li>
          <li>
            Conduct research and analysis of users’ behavior to improve our
            services and content (for instance, we may decide to change the look
            and feel or even substantially modify a given feature based on
            users’ behavior)
          </li>
          <li>
            Develop new features and services (for example, we may decide to
            build a new interests-based feature further to requests received
            from users).
          </li>
        </ul>

        <p className="underline">
          To prevent, detect and fight fraud or other illegal or unauthorized
          activities
        </p>
        <ul>
          <li>Address ongoing or alleged misbehavior on and off-platform</li>
          <li>
            Perform data analysis to better understand and design
            countermeasures against these activities
          </li>
          <li>
            Retain data related to fraudulent activities to prevent against
            recurrences
          </li>
        </ul>

        <p className="underline">To ensure legal compliance</p>
        <ul>
          <li>Comply with legal requirements</li>
          <li>Assist law enforcement</li>
          <li>Enforce or exercise our rights, for example our Terms</li>
        </ul>

        <p>
          To process your information as described above, we rely on the
          following legal bases:
        </p>

        <p className="underline">Provide our service to you</p>
        <p>
          Most of the time, the reason we process your information is to perform
          the contract that you have with us. For instance, as you go about
          using our service to build meaningful connections, we use your
          information to maintain your account and your profile, to make it
          viewable to other users and recommend other users to you.
        </p>

        <p className="underline">Legitimate interests </p>
        <p>
          We may use your information where we have legitimate interests to do
          so. For instance, we analyze users’ behavior on our services to
          continuously improve our offerings, we suggest offers we think might
          interest you, and we process information for administrative, fraud
          detection and other legal purposes.
        </p>

        <p className="underline">Consent</p>
        <p>
          From time to time, we may ask for your consent to use your information
          for certain specific reasons. You may withdraw your consent at any
          time by contacting us at the address provided at the end of this
          Privacy Policy.
        </p>

        <strong>6. HOW WE SHARE INFORMATION</strong>

        <p>
          Since our goal is to help you make meaningful connections, the main
          sharing of users’ information is, of course, with other users.
        </p>

        <p className="underline">With other users</p>
        <p>
          You share information with other users (and in the case of any sharing
          features available on Skippit, the individuals or apps with whom a
          Skippit user may choose to share you with) when you voluntarily
          disclose information on the service (including your public profile).
          Please be careful with your information and make sure that the content
          you share is stuff that you’re comfortable being publically viewable
          since neither you nor we can control what others do with your
          information once you share it.
        </p>

        <p>
          If you choose to limit the audience for all or part of your profile or
          for certain content or information about you, then it will be visible
          according to your settings.
        </p>

        <p className="underline">With our service providers and partners</p>
        <p>
          We use third parties to help us operate and improve our services.
          These third parties assist us with various tasks, including data
          hosting and maintenance, analytics, customer care, marketing,
          advertising, payment processing and security operations.
        </p>
        <p>
          We may also share information with partners who distribute and assist
          us in advertising our services. For instance, we may share limited
          information on you in hashed, non-human readable form to advertising
          partners.
        </p>

        <p>
          We follow a strict vetting process prior to engaging any service
          provider or working with any partner. All of our service providers and
          partners must agree to strict confidentiality obligations.
        </p>

        <p className="underline">For corporate transactions</p>
        <p>
          We may transfer your information if we are involved, whether in whole
          or in part, in a merger, sale, acquisition, divestiture,
          restructuring, reorganization, dissolution, bankruptcy or other change
          of ownership or control.
        </p>

        <p className="underline">When required by law</p>
        <p>
          We may disclose your information if reasonably necessary: (i) to
          comply with a legal process, such as a court order, subpoena or search
          warrant, government / law enforcement investigation or other legal
          requirements; (ii) to assist in the prevention or detection of crime
          (subject in each case to applicable law); or (iii) to protect the
          safety of any person.
        </p>

        <p className="underline">To enforce legal rights</p>
        <p>
          We may also share information: (i) if disclosure would mitigate our
          liability in an actual or threatened lawsuit; (ii) as necessary to
          protect our legal rights and legal rights of our users, business
          partners or other interested parties; (iii) to enforce our agreements
          with you; and (iv) to investigate, prevent, or take other action
          regarding illegal activity, suspected fraud or other wrong doing.
        </p>

        <p className="underline">With your consent or at your request</p>
        <p>
          We may ask for your consent to share your information with third
          parties. In any such case, we will make it clear why we want to share
          the information.
        </p>
        <p>
          We may use and share non-personal information (meaning information
          that, by itself, does not identify who you are such as device
          information, general demographics, general behavioral data,
          geolocation in de-identified form), as well as personal information in
          hashed, non-human readable form, under any of the above circumstances.
        </p>

        <strong>8. YOUR RIGHTS</strong>
        <p>
          We want you to be in control of your information, so we have provided
          you with the following tools:
        </p>

        <p className="underline">Access / Update tools in the service</p>
        <p>
          Tools and account settings that help you to access, rectify or delete
          information that you provided to us and that’s associated with your
          account directly within the service. If you have any question on those
          tools and settings, please contact our customer care team for help
          here.
        </p>

        <p className="underline">Device permissions</p>
        <p>
          Mobile platforms have permission systems for specific types of device
          data and notifications, such as phone book and location services as
          well as push notifications. You can change your settings on your
          device to either consent or oppose the collection of the corresponding
          information or the display of the corresponding notifications. Of
          course, if you do that, certain services may lose full functionality.
        </p>

        <p className="underline">Deletion</p>
        <p>
          You can delete your account by using the corresponding functionality
          directly on the service. We want you to be aware of your privacy
          rights. Here are a few key points to remember:
        </p>
        <ul>
          <li>
            Keep in mind, we may reject requests for certain reasons, including
            if the request is unlawful or if it may infringe on trade secrets or
            intellectual property or the privacy of another user.{" "}
          </li>
          <li>
            Also, we may not be able to accommodate certain requests to object
            to the processing of personal information, notably where such
            requests would not allow us to provide our service to you anymore.
            For instance, we cannot provide our service if we do not have your
            date of birth.
          </li>
        </ul>

        <p className="underline">Uninstall</p>
        <p>
          You can stop all information collection by an app by uninstalling it
          using the standard uninstall process for your device. If you uninstall
          the app from your mobile device, the unique identifier associated with
          your device will continue to be stored. If you re-install the
          application on the same mobile device, we will be able to re-associate
          this identifier to your previous transactions and activities.
        </p>

        <strong>9. RESIDENTS OF CALIFORNIA</strong>
        <p>
          If you are a California resident, you can request a notice disclosing
          the categories of personal information about you that we have shared
          with third parties for their direct marketing purposes during the
          preceding calendar year. To request this notice, please submit your
          request here. Please allow 30 days for a response. For your protection
          and the protection of all of our users, we may ask you to provide
          proof of identity before we can answer such a request.
        </p>

        <strong>10. HOW WE PROTECT YOUR INFORMATION</strong>
        <p>
          We work hard to protect you from unauthorized access to or alteration,
          disclosure or destruction of your personal information. As with all
          technology companies, although we take steps to secure your
          information, we do not promise, and you should not expect, that your
          personal information will always remain secure.
        </p>

        <p>
          We may suspend your use of all or part of the services without notice
          if we suspect or detect any breach of security. If you believe that
          your account or information is no longer secure, please notify us
          immediately.
        </p>

        <strong>11. HOW LONG WE RETAIN YOUR INFORMATION</strong>
        <p>
          We keep your personal information only as long as we need it for
          legitimate business purposes (as laid out in Section 5) and as
          permitted by applicable law.
        </p>
        <p>
          In practice, we delete or anonymize your information upon deletion of
          your account (following the safety retention window) or after two
          years of continuous inactivity, unless:
        </p>
        <ul>
          <li>
            We must keep it to comply with applicable law (for instance, some
            “traffic data” is kept for one year to comply with statutory data
            retention obligations);
          </li>
          <li>
            We must keep it to evidence our compliance with applicable law (for
            instance, records of consents to our Terms, Privacy Policy and other
            similar consents are kept for five years); there is an outstanding
            issue, claim or dispute requiring us to keep the relevant
            information until it is resolved; or
          </li>
          <li>
            the information must be kept for our legitimate business interests,
            such as fraud prevention and enhancing users' safety and security.
            For example, information may need to be kept to prevent a user who
            was banned for unsafe behavior or security incidents from opening a
            new account.
          </li>
        </ul>

        <p>
          Keep in mind that even though our systems are designed to carry out
          data deletion processes according to the above guidelines, we cannot
          promise that all data will be deleted within a specific timeframe due
          to technical constraints.
        </p>

        <strong>12. CHILDREN’S PRIVACY</strong>

        <p>
          Our services are restricted to users who are 18 years of age or older.
          We do not permit users under the age of 18 on our platform and we do
          not knowingly collect personal information from anyone under the age
          of 18. If you suspect that a user is under the age of 18, please
          notify us immediately.
        </p>

        <strong>13. PRIVACY POLICY CHANGES</strong>

        <p>
          Because we’re always looking for new and innovative ways to help you
          build meaningful connections, this policy may change over time. We
          will notify you before any material changes take effect so that you
          have time to review the changes.
        </p>

        <strong>13. PRIVACY POLICY CHANGES</strong>
        <p>
          If you have questions about this Privacy Policy, here’s how you can
          reach us:
        </p>
        <p>
          Online: 
          <br />
          marc@skippitapp.com
          <br />
          By post:
          <br />
          Skippit Inc.
          <br />
          135 Main St
          <br />
          2nd floor
          <br />
          San Francisco, USA
        </p>
      </div>
      <Under inPage />
    </>
  );
};

export default Privacy;
