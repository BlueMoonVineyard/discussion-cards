import Component from "flarum/common/Component";
import craftBadges from "../utils/craftBadges";
import getPostImage from "../helpers/getPostImage";
import craftTags from "../utils/craftTags";
import humanTime from 'flarum/common/utils/humanTime';
import icon from 'flarum/common/helpers/icon';
import username from 'flarum/common/helpers/username';
import Dropdown from 'flarum/common/components/Dropdown';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import Link from 'flarum/common/components/Link';
import {truncate} from 'flarum/common/utils/string';
import LastReplies from './LastReplies';


export default class cardItem extends Component {

  oninit(vnode) {
    super.oninit(vnode);
    this.discussion = this.attrs.discussion;
  }

  view() {
    const discussion = this.discussion;
    const settings = JSON.parse(app.forum.attribute('dem13nDiscussionCards'));
    const isRead = settings.markCards === 1 && (!discussion.isRead() && app.session.user) ? 'Unread' : '';
    const image = getPostImage(discussion.firstPost());
    const media = image
      ? <img src={image}
             alt={discussion.title()}
             loading="lazy"/>
      : ''

    return (
      <div key={discussion.id()}
           data-id={discussion.id()}
           className={"CardsListItem Card " + isRead + (discussion.isHidden() ? " Hidden" : "")}>
        {DiscussionControls.controls(discussion, this).toArray().length
          ? m(Dropdown, {
            icon: 'fas fa-ellipsis-v',
            className: 'DiscussionListItem-controls',
            buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right',
          }, DiscussionControls.controls(discussion, this).toArray())
          : ''}
        <Link href={app.route.discussion(discussion, 0)}
              className="cardLink">
          {settings.cardBadges === 1
            ? craftBadges(discussion.badges().toArray())
            : ''}

          <div class="card-body">
            <div class="card-body-left">
              <div className="cardTags">{craftTags(discussion.tags())}</div>
              <div className="cardAuthor">{username(discussion.user())}</div>
              <div className="cardTitle"><h2>{discussion.title()}</h2></div>
              {settings.previewText === 1 && discussion.firstPost()
                ? <div className="previewPost">{truncate(discussion.firstPost().contentPlain(), 150)}</div>
                : ''}
            </div>
            <div class="card-body-right">
              {media}
            </div>
          </div>

          {settings.Replies === 1
            ? <div className="cardSpacer">
              <Link
                className="Replies"
                href={app.route.discussion(discussion, discussion.lastPostNumber())}>
                <div className="Left">
                  <div className="Avatars">
                    {m(LastReplies, {discussion: discussion})}
                  </div>
                  <div className="Repcount">
                    {app.translator.trans('dem13n.forum.replies', {count: discussion.replyCount() || '0'})}
                  </div>
                  {humanTime(discussion.createdAt())}
                </div>
                <div className="Arrow">
                  {icon('fas fa-angle-right')}
                </div>
              </Link>
            </div>
            : ''}

        </Link>
      </div>
    );

  }

}
